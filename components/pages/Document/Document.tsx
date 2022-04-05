import { useRouter } from "next/router"
import React, { useEffect, useState, useCallback, useContext, useMemo } from "react";
import io from 'Socket.IO-client';
import { useAuth } from "../../../lib/auth/useAuth";

import DocHeader from "../../DocHeader";
import TextContainer from "../../TextContainer";
import { useMutation, useQuery } from '@apollo/client'

import debounce from 'lodash.debounce';

import { WebSocketContext } from '../../../components/providers/WebSocketProvider'

let socket;

import {
    DocumentDocument,
    DocumentQuery,
    SetItemIndexDocument,
    SaveTitleDocument,
    SaveItemDocument
} from './Document.generated'

import { CreateItemDocument } from "../../AppShell/components/NavBar/NavBar.generated";

export type DocumentItem = DocumentQuery['document']['items'][0]

function Document({ data }) {
    const documentId = data.document.id;
    const [currentDoc, setDocument] = useState(data.document)
    const [lastActive, setLastActive] = useState(null);

    const { user: me } = useAuth()

    const hasWriteAccess = useMemo(() => {
        if (me?.id === currentDoc.ownerId) {
            return true
        }
        const access = currentDoc.members.filter(member => member.user.id === me?.id && member.role === 'write')
        if (access.length) {
            return true
        }
        return false
    }, [me, currentDoc])

    console.log("write access", hasWriteAccess)

    const clientSocket = useContext(WebSocketContext);

    useEffect(() => {
        socketInitializer();

        return () => {
            socket.off(`${documentId}`, handleUpdate)
        }
    }, [data]);

    useEffect(() => {
        setDocument(data.document);
    }, [data]);

    const changeItem = ({ input }) => {

        if (currentDoc) {
            setDocument(prev => ({ ...prev, items: prev?.items.map(item => item.index === 0 ? { ...item, text: input } : item) }))
        }
    }

    const socketInitializer = async () => {
        await fetch('/api/socket')
        socket = clientSocket;
        socket.on(`${documentId}`, handleUpdate)
    }

    const handleUpdate = (msg: { input: any; type: string; id: any; }) => {
        console.log("recieved new event: ", msg)
        if (msg.type === 'title') {
            setDocument(prev => ({ ...prev, title: msg.input }))
        } else if (msg.type === 'body') {
            changeItem({ input: msg.input });
        }
    }

    const [createItem] = useMutation(CreateItemDocument); // TODO: create mutation to save a document
    const [setItemIndex] = useMutation(SetItemIndexDocument);

    const handleCreateItem = async (index: number) => {
        // move up all items after the new item

        console.log("n items is", currentDoc?.items.length)
        if (index < currentDoc.items.length) {
            console.log("reordering indexes")
            pushIndexesForward(index);
            console.log("reordered indexes: ", currentDoc?.items)
        }

        console.log("creating new item")
        let newItem = {
            document_id: documentId as string,
            index: index,
            text: ""
        }

        console.log("pushing new item to db")
        const newItemResult = await createItem(
            {
                variables: {
                    object: newItem
                }
            }
        )
        const newItemId = newItemResult.data.insertDocumentItem.id
        newItem["id"] = newItemId
        setDocument({ ...currentDoc, items: [...currentDoc.items, newItem].sort((a, b) => a.index - b.index) })
        // currentDoc.items.sort((a, b) => a.index - b.index); // sort items by index

    }

    const pushIndexesForward = (index: number) => {
        if (currentDoc) {
            const newItems: DocumentItem[] = [...currentDoc.items];
            for (let i = newItems.length - 1; i = index; i--) {
                newItems[i] = { ...newItems[i], index: i + 1 };
                console.log("change index of", newItems[i], "from ", i, "to", newItems[i].index)

                setItemIndex({
                    variables: {
                        id: newItems[i].id,
                        new_index: i + 1
                    }
                })
            }
            setDocument(prev => ({ ...prev, items: newItems }))

        }
    }

    const pushIndexesBackward = (index: number) => {
        if (currentDoc) {
            const newItems: DocumentItem[] = [...currentDoc.items];
            for (let i = newItems.length - 1; i > index; i--) {
                newItems[i] = { ...newItems[i], index: i - 1 };
                console.log("change index of", newItems[i], "from ", i, "to", newItems[i].index)

                setItemIndex({
                    variables: {
                        id: newItems[i].id,
                        new_index: i - 1
                    }
                })
            }
            setDocument(prev => ({ ...prev, items: newItems }))
            console.log(newItems)
        }
    }

    // const [saveDocument] = useMutation(SaveDocumentDocument);
    // const [saveTitle] = useMutation(SaveTitleDocument, { refetchQueries: [DocumentDocument] });
    const [saveTitle] = useMutation(SaveTitleDocument);
    const [saveItem] = useMutation(SaveItemDocument);

    const debouncedSave = useCallback(
        debounce(async (newData: any) => {
            await saveDocumentHandler(newData);
        }, 2000),
        [],
    );

    useEffect(() => {
        if (currentDoc) {
            debouncedSave(currentDoc);
        }
    }, [currentDoc, debouncedSave]); // ändrade för att förhindra att den sparar när currentDoc uppdateras
    // }, [debouncedSave]);

    const saveDocumentHandler = async (data: any) => {
        console.log("Saving document: ", documentId)
        // console.log("Items", currentDoc.items);
        if (data.id) {
            await saveTitle(
                {
                    variables: {
                        documentId: data.id,
                        title: data.title,
                        updated_at: new Date().toISOString()
                    }
                }
            )
            console.log("saved title")
            await saveItem(
                {
                    variables: {
                        itemId: data.items[0].id,
                        text: data.items[0].text
                    }
                }
            )
            console.log("saved item:", {
                itemId: data.items[0].id,
                text: data.items[0].text
            })
        }
    }

    const onChangeHandler = (event) => {
        if (hasWriteAccess) {
            const input = event.target.value;
            socket.emit('input-change', { input, documentId })
            // console.log("emmited ", { input, documentId })
            changeItem({ input });
            setLastActive(new Date());
        }
    }

    const titleOnChangeHandler = (event) => {
        if (hasWriteAccess) {
            const title = event.target.value;
            socket.emit('title-change', { title, documentId })
            // console.log("emmited new title: ", { title, documentId })
            setDocument(prev => ({ ...prev, title: title }))
            setLastActive(new Date());
        }
    }

    const deleteItemHandler = (event: { itemId: string, index: number }) => {
        if (hasWriteAccess) {
            socket.emit("delete-item", event.itemId)
            console.log("emmited delete item: ", event.itemId)
            pushIndexesBackward(event.index);
            console.log("pushed indexes backward")
        }
    }

    return (
        <>
            {currentDoc && currentDoc?.items.length !== 0 && (
                <>
                    <DocHeader doc={currentDoc} onChange={titleOnChangeHandler} />
                    <TextContainer items={currentDoc.items} newItem={handleCreateItem} writeAccess={hasWriteAccess} onChange={onChangeHandler} deleteItem={deleteItemHandler}></TextContainer>
                </>
            )}
        </>

    )
}

const Wrapper = () => {
    const router = useRouter()

    const {
        query: { documentId },
    } = router

    const { data, loading, refetch } = useQuery(DocumentDocument, {
        skip: !documentId,
        variables: {
            id: documentId,
        },
    });

    if (loading) {
        return <div>Loading...</div>
    }
    else if (!data) {
        return <div>No data</div>
    }

    return (
        <Document data={data} />
    )
}

export default Wrapper
import React, { useEffect, useMemo, useState } from 'react';

/* Next js Components */
import DocRef from '../DocRef';
import NewDocButton from '../NewDocButton';

/* CSS */
import { useMutation, useQuery, useSubscription } from '@apollo/client';
import { OwnedDocumentsDocument, SharedDocumentsDocument, CreateDocumentDocument, CreateItemDocument } from './NavBar.generated';
import { useAuth } from '../../../../lib/auth/useAuth';
import Router, { useRouter } from 'next/router';
import LogoutButton from '../LogoutButton';


export default function NavBar() {

    const { user } = useAuth()
    const router = useRouter()

    const { data: owned } = useSubscription(OwnedDocumentsDocument, {
        variables: { userId: user?.id }
    })

    const { data: shared } = useSubscription(SharedDocumentsDocument, {
        variables: { userId: user?.id }
    })

    const docs = useMemo(() => ({ owned: owned?.owned, shared: shared?.shared }), [owned, shared])

    const [createDocument] = useMutation(CreateDocumentDocument);
    const handleCreateDocument = async () => {
        const data = await createDocument(
            {
                variables: {
                    object: {
                        title: "untitled",
                        ownerId: user.id,
                    }
                }
            }
        )
        const newId = data.data.insertDocument.id
        handleCreateItem(newId)
        router.push(`/document/${newId}`)
    }

    const [createItem] = useMutation(CreateItemDocument);
    const handleCreateItem = (documentId) => {
        const newItem = {
            document_id: documentId as string,
            index: 0,
            text: ""
        }
        createItem(
            {
                variables: {
                    object: newItem
                }
            }
        )
    }

    return (
        // <div className="col-auto col-md-3 col-xl-2 px-sm-2 position-sticky" style={{ backgroundColor: "#e8e8df" }}>
        //     <div className="d-flex flex-column align-items-center align-items-sm-start p-3 min-vh-100">
        //         <ul className="nav flex-column mb-sm-auto align-items-sm-start" id="menu">
        <div className='w-60 border-b border-gray-200 pt-5 pb-4 px-4 overflow-y-auto bg-slate-100 flex'>
            <div className='mt-2 flex flex-col w-full'>
                <div className='grow' id="menu">
                    <div className='font-normal text-xl px-12 mb-10'>TextEditor™</div>
                    <NewDocButton newDoc={handleCreateDocument}></NewDocButton>
                    <hr className='my-4' />
                    <h3 className='font-bold text-xs px-2 py-3 uppercase text-slate-600'>My documents</h3>
                    {docs?.owned?.map((item, index) => {
                        return <DocRef key={index} doc={item} />
                    })}
                    <hr className='my-4' />
                    <h3 className='font-bold text-xs px-2 py-3 uppercase text-slate-600'>Shared with me</h3>
                    {docs?.shared?.map((item, index) => {
                        return <DocRef key={index} doc={item} />
                    })}
                    <hr className='my-4' />
                </div>
                <div className='flex-none'>
                    {/* <ul id="logout"> */}
                    <LogoutButton></LogoutButton>
                    {/* </ul> */}
                </div>
            </div>
        </div>
    );
}
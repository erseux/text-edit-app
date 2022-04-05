import React, { useEffect, useState } from 'react';
import { DocumentItem } from '../pages/Document/Document';

import TextBlock from '../TextBlock';

type Props = {
    items: DocumentItem[]
    newItem: (index: number) => void
    onChange: (event: any) => void
    deleteItem: (itemId: { itemId: string, index: number }) => void
    writeAccess: boolean;
}

function TextContainer({ items, newItem, onChange, deleteItem, writeAccess }: Props) {

    const removeBlock = (index: number) => {
        console.log("trying to remove  block at index ", index)
        if (allItems) {
            console.log(allItems)
            if (allItems.length > 1) {
                const itemId = allItems[index].id as string
                deleteItem({ itemId: itemId, index: index })
                setItems(allItems.filter(function (item) {
                    return item.index !== index
                }))
            }
        }
    }

    const [allItems, setItems] = useState([]);

    useEffect(() => {
        setItems(items)
    }, [items])

    return (
        <div className='mt-6 bg-light relative block rounded-3 h-100 ' >
            {allItems?.map((item, index) => {
                return <TextBlock key={item.id} item={item} writeAccess={writeAccess} removeBlock={removeBlock} newBlock={newItem} onChange={onChange}></TextBlock>
            })}
        </div>
    );
}

export default TextContainer;
import React from 'react';

/* Next js Components */
import Link from 'next/link';
import { DocumentAddIcon } from '@heroicons/react/outline';
import classNames from 'classnames';

/* TODO: Generate new document  */

export default function NewDocButton(props) {
    const handleClick = () => {
        props.newDoc();
    }

    const linkStyle =
        'group flex items-center border-white px-2 relative py-2 text-sm font-normal rounded-md tracking-wide'

    return (
        <Link href={`/`}>
            <a className={classNames(
                'text-gray-400 hover:text-gray-700',
                linkStyle,
                'mt-2'
            )} onClick={handleClick} >
                <DocumentAddIcon
                    strokeWidth={2}
                    style={{ height: 20, width: 20, alignSelf: "center", marginRight: 5 }}
                />
                Create new
            </a>
        </Link>
    )
}
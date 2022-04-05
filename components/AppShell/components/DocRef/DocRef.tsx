import React from 'react';
/* Next js Components */
import Link from 'next/link';
/* A document reference link */

import { DocumentTextIcon } from '@heroicons/react/outline'
import classNames from 'classnames';
import { useRouter } from 'next/router';

export default function DocRef({ doc }) {
    const pathname = useRouter().asPath
    const linkStyle =
        'group flex items-center border-white px-2 relative py-2 text-sm font-normal rounded-md tracking-wide'

    return (
        <Link href={`/document/${doc.id}`}>
            <a className={classNames(
                `/document/${doc.id}` === pathname ? ' text-gray-900' : 'text-gray-400 hover:text-gray-700',
                linkStyle
            )}>
                <DocumentTextIcon
                    strokeWidth={2}
                    style={{ height: 20, width: 20, alignSelf: "center", marginRight: 5 }}
                />
                {doc.title}
            </a>
        </Link>

    );
}
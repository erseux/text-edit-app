import React from 'react';
import Link from 'next/link';
import { LogoutIcon } from '@heroicons/react/outline';
import classNames from 'classnames';

export default function NewDocButton() {
    const linkStyle =
        'group flex items-center border-white px-2 relative py-2 w-25 text-sm font-normal rounded-md tracking-wide'

    return (
        // <li className="nav-item absolute inset-x-0 px-2 bottom-5">
        <Link href={'/api/auth/logout'}>
            <a className={classNames(
                'text-gray-400 hover:text-gray-700',
                linkStyle,
                'bg-slate-200 rounded-lg'
            )}>
                <LogoutIcon
                    strokeWidth={2}
                    style={{ height: 20, width: 20, alignSelf: "center", marginRight: 5 }}
                />
                Log out
            </a>
        </Link>
        // </li>
    )
}
import moment from "moment";
import { Dialog, Transition } from '@headlessui/react'


import React, { Fragment, useMemo, useState } from "react";
import { useAuth } from "../../lib/auth/useAuth";
import { UserAddIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import { AllUsersDocument, AddUserAccessDocument, RemoveUserAccessDocument, ChangeUserRoleDocument, ChangeUserRoleMutationVariables, DocumentMembersDocument } from "./DocHeader.generated";
import { useMutation, useQuery } from '@apollo/client'

export default function DocHeader(props): JSX.Element {
	const doc = props.doc;

	const handleTitleChange = (event) => {
		props.onChange(event);
	}

	const formatLastSave = (lastSave: Date): string => {
		const date = new Date(lastSave);
		const relativeTime = moment(date).fromNow();
		return relativeTime;
	}

	return (
		<div style={{ background: "#fff", width: "100%", flexDirection: "row", flex: 1, paddingTop: 20 }} className="position-fixed" >
			<div className="bg-slate-100 mt-5 w-100 rounded-lg">
				<input
					value={doc.title ?? ""}
					placeholder="Document title"
					onChange={handleTitleChange}
					className="text-2xl rounded-lg p-2 text-slate-500 focus:text-slate-600 font-medium w-full focus:outline-none focus:ring-slate-200 focus:ring-1 "
				/>
			</div>
			<div className='mt-1 grid grid-cols-2'>
				<div className='text-slate-500 font-light flex items-end text-sm'>
					Last saved: {formatLastSave(doc?.updated_at)}
				</div>
				<div className="flex justify-end">
					<AccessManager doc={doc} />
				</div>
			</div>
			<hr className="mt-2" />
		</div>
	)
}

// React component for managing access to a document
function AccessManager(props) {
	const doc = props.doc;
	const { user: me } = useAuth()
	const isOwner = useMemo(() => me?.id === doc.ownerId, [me?.id, doc.ownerId])
	const owner = doc.owner
	const [userSearch, setUserSearch] = useState('')

	const [shareOpen, setShareOpen] = useState(false)

	const { data: members } = useQuery(DocumentMembersDocument, {
		variables: { id: doc.id }
	})
	const docMembers = members?.document?.members

	const [removeMemberAccess] = useMutation(RemoveUserAccessDocument, {
		refetchQueries: [DocumentMembersDocument]
	});
	const [addMemberAccess] = useMutation(AddUserAccessDocument, {
		refetchQueries: [DocumentMembersDocument]
	});
	const [changeMemberRole] = useMutation(ChangeUserRoleDocument, {
		refetchQueries: [DocumentMembersDocument]
	});

	const addMember = (user: { user: { id: any; }; }) => {
		addMemberAccess(
			{
				variables: {
					userId: user.user.id,
					docId: doc.id,
					role: "write"
				}
			}
		)
	} // add member to doc query

	const removeMember = (userId: string) => {
		removeMemberAccess({
			variables: {
				userId,
				docId: doc.id
			}
		})
	}

	const changeRole = ({ userId, newRole }: ChangeUserRoleMutationVariables) => {
		changeMemberRole(
			{
				variables: {
					userId,
					docId: doc.id,
					newRole
				}
			}
		)

	}

	const { data, loading, refetch } = useQuery(AllUsersDocument, {})
	const allUsers = data?.users ?? []
	const membersObj = docMembers.reduce((acc, curr) => {
		acc[curr.user.email] = curr
		return acc
	}, {});

	const notDocMembers = allUsers.filter(user => !membersObj[user.email] && user.email !== me?.email)

	return (
		<>
			<Popover open={shareOpen} handleOnClose={setShareOpen}>
				<div className='flex items-center'>
					{me.id === doc.ownerId ? (
						<>
							<UserAddIcon className='h-8 w-8 p-1 text-gray-400 mr-2' />
							<span className='block text-gray-500 '>{`Manage access to `} <i>{doc.title}</i></span>
						</>
					) : (
						<div className='flex items-center'>
							<span className='block text-gray-500 '>{doc.title}</span>
						</div>
					)}
				</div>
				<div className='flex border-b pb-1 pt-2 justify-between'></div>
				<span className='block mt-8 font-bold text-xs uppercase text-slate-600'>Users with access</span>
				<UserRow key={owner.id} member={{ role: "owner", user: owner }} onAdd={addMember} onDelete={removeMember} changeRole={changeRole} isOwner={isOwner} />
				{docMembers?.map(member => (
					<UserRow key={member.user.id} member={member} onAdd={addMember} onDelete={removeMember} changeRole={changeRole} isOwner={isOwner} />
				))}
				{isOwner && (
					<>
						<span className='block mt-8 font-bold text-xs uppercase text-slate-600'>Add users</span>
						<input
							// hideLabel={true}
							placeholder='Search'
							className='my-1 font-normal italic text-gray-500'
							onChange={e => setUserSearch(e.target.value)}
							value={userSearch}
						/>
						<div className='h-44 overflow-y-scroll border p-2 mt-1 rounded-lg'>
							{notDocMembers
								.filter(user => user.email.includes(userSearch))
								?.sort((a, b) => (a.email > b.email ? 1 : -1))
								?.map(user => (
									<UserRow
										key={(user.email)}
										member={{ user: user }}
										onDelete={removeMember}
										onAdd={addMember}
										changeRole={changeRole}
										isOwner={isOwner}
									/>
								))}
						</div>
					</>
				)}
				<div className="flex justify-end">
					<button
						className='mt-5 p-2 bg-slate-500 text-slate-100 rounded-lg'
						onClick={() => setShareOpen(false)}
					>
						Done
					</button>
				</div>
			</Popover>
			<div className='flex'>
				<button onClick={() => setShareOpen(true)}>
					<UserAddIcon className='h-8 w-8 p-1 text-gray-400 hover:text-gray-500' />
				</button>
			</div>
		</>
	)
}

function Popover({ children, open, handleOnClose }) {
	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog as='div' className='fixed z-10 inset-0 overflow-y-auto' onClose={handleOnClose}>
				<div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
					</Transition.Child>
					<span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
						&#8203;
					</span>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
						enterTo='opacity-100 translate-y-0 sm:scale-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100 translate-y-0 sm:scale-100'
						leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
					>
						<div className='inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6'>
							{children}
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	)
}

function UserRow({ member, onAdd, onDelete, changeRole, isOwner }): JSX.Element {
	const [isSelected, setIsSelected] = useState(false)
	const otherRole = member.role === "read" ? "write" : "read"
	return (
		<div
			key={member.user.id}
			className={classNames(
				'flex my-2 items-center justify-between border border-transparent cursor-pointer px-2 py-1 rounded-lg',
				{
					'bg-gray-50': !isSelected,
					'bg-gray-100': isSelected,
				}
			)}
			onMouseEnter={() => setIsSelected(true)}
			onMouseLeave={() => setIsSelected(false)}
		>
			<div className='flex items-center '>
				<div className=''>
					<span className='text-slate-500 block font-light py-1'>{member.user.email}</span>
				</div>
			</div>

			{!member.role && isOwner && (
				<button onClick={() => onAdd(member)} className="text-sm text-slate-100 p-1 bg-blue-400 hover:bg-blue-600 focus:ring-blue-200 rounded-md font-light">
					Add
				</button>
			)}
			{member.role === 'owner' && <span className={'text-gray-400 font-light ml-3 italic'}>{member.role}</span>}
			{member.role && member.role !== 'owner' && <span className={'text-gray-400 font-light ml-3'}>{member.role}</span>}
			{isOwner && isSelected && member.role !== 'owner' && member.role && (
				<button onClick={() => changeRole({ userId: member.user.id, newRole: otherRole })} className='text-sm p-1 bg-blue-50 text-blue-800 hover:bg-blue-100 focus:ring-blue-200 rounded-md font-light'>
					change to {otherRole}
				</button>
			)
			}
			{isOwner && isSelected && member.role !== 'owner' && member.role && (
				<button onClick={() => onDelete(member.user.id)} className='text-sm p-1 bg-red-50 text-red-800 hover:bg-red-100 focus:ring-red-200 rounded-md font-light'>
					Remove
				</button>
			)
			}
		</div >
	)
}
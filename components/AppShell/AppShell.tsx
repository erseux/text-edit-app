import React, { useState } from 'react'
import NavBar from './components/NavBar/NavBar'

type ShellProps = {
	className?: string
}

const AppShell: React.FC<ShellProps> = ({ className, children }) => {

	return (

		<div className="flex h-screen">
			<NavBar />
			<div className="flex-grow px-10 overflow-y-scroll" >
				{children}
			</div>
		</div>

	)
}

export default AppShell
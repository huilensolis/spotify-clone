'use client'

import { ArrowLeftIcon } from '@icons'

import { useRouter } from 'next/navigation'
import { AuthButtons } from '@components'
import { ReactNode } from 'react'

export function Header({ children }: { children: ReactNode }) {
	const router = useRouter()
	return (
		<header className="flex flex-col h-fit bg-gradient-to-b from-emerald-800 md:p-6 p-2 rounded-md overflow-hidden gap-4">
			<div className="gap-2 lg:flex hidden justify-between w-full">
				<div className="flex gap-2 justify-center items-center">
					<button
						onClick={router.back}
						className="flex justify-center items-center bg-neutral-950 p-2 rounded-full hover:bg-neutral-900 transition-all delay-75 group"
					>
						<ArrowLeftIcon className="h-4 w-4 fill-neutral-400 group-hover:fill-neutral-50 transition-all delay-75" />
					</button>
					<button
						onClick={router.forward}
						className="flex justify-center items-center bg-neutral-950 p-2 rounded-full hover:bg-neutral-900 transition-all delay-75 group"
					>
						<ArrowLeftIcon className="h-4 w-4 rotate-180 fill-neutral-400 group-hover:fill-neutral-50 transition-all delay-75" />
					</button>
				</div>
				<AuthButtons />
			</div>
			{children}
		</header>
	)
}

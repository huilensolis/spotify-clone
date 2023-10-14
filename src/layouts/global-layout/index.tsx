import { ReactNode } from 'react'

export function GlobalLayout({ children }: { children: ReactNode }) {
	return (
		<div className="bg-black max-h-screen h-full w-full text-green-500 overflow-y-hidden">
			{children}
		</div>
	)
}

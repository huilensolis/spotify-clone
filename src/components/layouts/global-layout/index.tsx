import { ReactNode } from 'react'

export function GlobalLayout({ children }: { children: ReactNode }) {
	return (
		<div className="bg-black min-h-screen w-full text-green-500">
			{children}
		</div>
	)
}

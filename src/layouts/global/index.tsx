import { ReactNode } from 'react'

export function GlobalLayout({ children }: { children: ReactNode }) {
	return (
		<div className="bg-black h-screen w-full text-neutral-50 overflow-y-hidden">
			{children}
		</div>
	)
}

import { ReactNode } from 'react'

export function GlobalLayout({ children }: { children: ReactNode }) {
	return (
		<div className="bg-black h-screen w-full text-neutral-50 overflow-y-hidden [&>*]:focus:outline-1 [&>*]:focus:outline-neutral-700">
			{children}
		</div>
	)
}

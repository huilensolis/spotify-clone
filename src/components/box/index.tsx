import { ReactNode } from 'react'

export function Box({ children }: { children: ReactNode }) {
	return (
		<div className="w-full h-max rounded-md bg-neutral-900 p-4">
			{children}
		</div>
	)
}

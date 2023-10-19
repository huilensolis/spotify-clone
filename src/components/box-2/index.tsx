import { ReactNode } from 'react'

export function Box2({
	children,
	extraStyles,
}: {
	children: ReactNode
	extraStyles?: string
}) {
	return (
		<div
			className={`w-full h-full rounded-md bg-neutral-700 p-4 ${
				extraStyles ?? ''
			}`}
		>
			{children}
		</div>
	)
}

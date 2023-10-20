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
			className={`w-full h-full rounded-md bg-neutral-700 md:p-4 p-2 ${
				extraStyles ?? ''
			}`}
		>
			{children}
		</div>
	)
}

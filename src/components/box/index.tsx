import { ReactNode } from 'react'

export function Box({
	children,
	extraStyles,
}: {
	children: ReactNode
	extraStyles?: string
}) {
	return (
		<div
			className={`w-full h-max rounded-md bg-cm-black p-4 ${
				extraStyles ?? ''
			}`}
		>
			{children}
		</div>
	)
}

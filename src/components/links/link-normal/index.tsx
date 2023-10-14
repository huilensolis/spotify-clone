import Link from 'next/link'
import { ReactNode } from 'react'

export function LinkNormal({
	children,
	href,
	target = '_blank',
}: {
	children: ReactNode
	href: string
	target?: string
}) {
	return (
		<Link
			href={href}
			target={target}
			className="text-neutral-400 font-semibold hover:text-neutral-200 transition-all delay-75"
		>
			{children}
		</Link>
	)
}

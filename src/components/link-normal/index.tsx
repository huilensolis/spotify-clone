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
			className="text-slate-300 font-semibold hover:text-slate-50 transition-all delay-75"
		>
			{children}
		</Link>
	)
}

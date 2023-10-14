import Link from 'next/link'
import { ReactNode } from 'react'

export function LinkFill({
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
			className="bg-white text-black font-semibold rounded-full py-2 px-6 hover:bg-slate-200 transition-all delay-75"
		>
			{children}
		</Link>
	)
}

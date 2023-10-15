import Link from 'next/link'
import { type NavItem } from '../../models'
import { useMemo } from 'react'

export function NavItem({ name, icon: Icon, href, isActive }: NavItem) {
	const color = `${
		isActive
			? 'fill-neutral-50 text-neutral-50'
			: 'fill-neutral-400 text-neutral-400 group-hover:fill-neutral-50 group-hover:text-neutral-50 transition-all delay-75'
	}`

	return (
		<Link
			href={href}
			className="flex lg:gap-x-4 justify-start items-center group cursor-pointer"
		>
			<Icon className={`${color} w-5 h-5`} />
			<span className={`${color} font-semibold hidden lg:inline-block`}>
				{name}
			</span>
		</Link>
	)
}

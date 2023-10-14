import Link from 'next/link'
import { type NavItem } from '../../models'
import { useMemo } from 'react'

export function NavItem({ name, icon: Icon, href, isActive }: NavItem) {
	const color = `${
		isActive
			? 'fill-white text-white'
			: 'fill-gray-400 text-gray-400 group-hover:fill-white group-hover:text-white transition-all delay-75'
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

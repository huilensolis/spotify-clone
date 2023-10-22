'use client'

import { useMemo } from 'react'
import { usePathname } from 'next/navigation'
import { type NavItem } from '@models'
import { NavItem as NavItemComponent, AuthButtons } from '@components'
import { HeartFill, HomeIcon, SearchIcon } from '@icons'

export function Nav() {
	const currentPath = usePathname()

	const routes = useMemo(
		(): NavItem[] => [
			{
				name: 'Home',
				href: '/',
				icon: HomeIcon,
				isActive: currentPath === '/',
			},
			{
				name: 'Search',
				href: 'search',
				icon: SearchIcon,
				isActive: currentPath === 'search',
			},
			{
				name: 'Favorites',
				href: 'favorites',
				icon: HeartFill,
				isActive: currentPath === 'favorites',
			},
		],
		[currentPath]
	)
	return (
		<ul className="w-full flex lg:justify-start justify-between">
			<ul className="flex lg:flex-col lg:gap-4">
				{routes.map((route) => (
					<li
						key={route.href}
						className="flex justify-start items-center"
					>
						<NavItemComponent
							href={route.href}
							icon={route.icon}
							isActive={route.isActive}
							name={route.name}
						/>
					</li>
				))}
			</ul>
			<div className="lg:hidden inline-block">
				<AuthButtons />
			</div>
		</ul>
	)
}

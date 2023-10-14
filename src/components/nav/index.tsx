'use client'

import { useMemo } from 'react'
import { usePathname } from 'next/navigation'
import { type NavItem } from '@models/index'
import { NavItem as NavItemComponent, AuthButtons } from '@components/index'
import { HeartFill, HomeIcon, SearchIcon } from '@icons/index'

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
				href: 'fav',
				icon: HeartFill,
				isActive: currentPath === 'fav',
			},
		],
		[currentPath]
	)
	return (
		<ul className="w-full flex lg:justify-start justify-between">
			<div className="flex lg:flex-col gap-4">
				{routes.map((route) => (
					<li key={route.href}>
						<NavItemComponent
							href={route.href}
							icon={route.icon}
							isActive={route.isActive}
							name={route.name}
						/>
					</li>
				))}
			</div>
			<div className="lg:hidden inline-block">
				<AuthButtons />
			</div>
		</ul>
	)
}

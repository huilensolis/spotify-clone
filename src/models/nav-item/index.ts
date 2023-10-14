import { TablerIconsProps } from '@tabler/icons-react'

export interface NavItem {
	icon: (props: TablerIconsProps) => JSX.Element
	name: string
	href: string
	isActive: boolean
}

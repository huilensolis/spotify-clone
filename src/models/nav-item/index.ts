export interface NavItem {
	icon: (props: any) => JSX.Element
	name: string
	href: string
	isActive: boolean
}

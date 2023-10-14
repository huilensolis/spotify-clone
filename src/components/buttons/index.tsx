'use client'

import { ReactNode } from 'react'

export function PrimaryBtn({
	children,
	disabled = false,
	OnClick,
}: {
	children: ReactNode
	OnClick: () => void
	disabled: boolean
}) {
	return (
		<button onClick={OnClick} disabled={disabled} aria-disabled={disabled}>
			{children}
		</button>
	)
}

export function SecondaryBtn({
	children,
	disabled = false,
	OnClick,
}: {
	children: ReactNode
	OnClick: () => void
	disabled: boolean
}) {
	return (
		<button onClick={OnClick} disabled={disabled} aria-disabled={disabled}>
			{children}
		</button>
	)
}

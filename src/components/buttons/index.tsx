'use client'

import { ReactNode } from 'react'

export function PrimaryBtn({
	children,
	disabled = false,
	OnClick,
}: {
	children: ReactNode
	OnClick: () => void
	disabled?: boolean
}) {
	return (
		<button
			onClick={OnClick}
			disabled={disabled}
			aria-disabled={disabled}
			className="bg-neutral-50 text-neutral-900 font-semibold rounded-full py-2 px-6 hover:bg-slate-200 transition-all delay-75 flex justify-center items-center text-center"
		>
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
	disabled?: boolean
}) {
	return (
		<button
			onClick={OnClick}
			disabled={disabled}
			aria-disabled={disabled}
			className="flex justify-center items-center text-center text-neutral-300 hover:text-neutral-200 transition-all delay-75"
		>
			{children}
		</button>
	)
}

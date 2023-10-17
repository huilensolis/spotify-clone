'use client'

import { ReactNode, ButtonHTMLAttributes } from 'react'

interface PrimaryBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	disabled?: boolean
	onClick?: () => void
	isLoading?: boolean
	theme?: 'default' | 'emerald'
}

export function PrimaryBtn({
	children,
	disabled = false,
	onClick,
	theme = 'default',
	isLoading = false,
	...props
}: PrimaryBtnProps) {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			aria-disabled={disabled}
			className={`${
				theme === 'default' ? 'bg-neutral-50 hover:bg-slate-200' : ''
			} ${
				theme === 'emerald' ? 'bg-green-500 hover:bg-green-600' : ''
			} text-neutral-900  font-semibold rounded-full py-2 px-6  transition-all delay-75 flex justify-center items-center text-center disabled:brightness-75 disabled:cursor-not-allowed`}
			{...props}
		>
			{isLoading ? 'Loading...' : children}
		</button>
	)
}

interface SecondaryBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	onClick: () => void
	disabled?: boolean
}

export function SecondaryBtn({
	children,
	disabled = false,
	onClick,
	...props
}: SecondaryBtnProps) {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			aria-disabled={disabled}
			className="flex justify-center items-center text-center text-neutral-300  font-semibold hover:text-neutral-200 transition-all delay-75"
			{...props}
		>
			{children}
		</button>
	)
}

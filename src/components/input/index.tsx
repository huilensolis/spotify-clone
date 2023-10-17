import { forwardRef } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, type, disabled, ...props }, ref) => {
		return (
			<input
				type={type}
				className={`${className} flex w-full rounded-md bg-neutral-700 border-2 border-transparent p-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus-visible:outline-none focus:border-neutral-500 focus-visible:border-neutral-500 `}
				disabled={disabled}
				ref={ref}
				{...props}
			/>
		)
	}
)

Input.displayName = 'Input'

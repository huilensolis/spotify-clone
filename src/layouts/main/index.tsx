import { ReactNode } from 'react'

export function MainLayout({ children }: { children: ReactNode }) {
	return (
		<main className="flex flex-col w-full min-h-screen bg-cm-black rounded-md">
			{children}
		</main>
	)
}

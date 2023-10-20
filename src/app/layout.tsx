import './globals.css'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import { GlobalLayout } from '@layouts'

const figtree = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Spotify Clone',
	description: 'A spotify clone built by Huilen Solis',
}

export const revalidate = 0;

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={`${figtree.className}`}>
				<GlobalLayout>{children}</GlobalLayout>
			</body>
		</html>
	)
}

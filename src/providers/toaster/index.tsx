'use client'

import { Toaster } from 'react-hot-toast'

export function ToasterProvider() {
	return (
		<Toaster
			toastOptions={{
				style: {
					backgroundColor: '#171717',
					color: '#FAFAFA',
				},
			}}
		/>
	)
}

'use client'

import { useEffect, useState } from 'react'
import { AuthModal } from '@components'
import { UploadModal } from '../../components/uplaod-modal/index'

export function ModalProvider() {
	//
	// --- we ensure the modal only mounts in the client side
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)

		return () => setIsMounted(false)
	}, [])

	if (!isMounted) return null

	// --- we ensure the modal only mounts in the client side
	//
	return (
		<>
			<AuthModal />
			<UploadModal />
		</>
	)
}

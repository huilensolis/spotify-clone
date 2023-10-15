'use client'

import {
	useSessionContext,
	useSupabaseClient,
} from '@supabase/auth-helpers-react'
import { useRouter } from 'next/navigation'
import { Auth } from '@supabase/auth-ui-react'

import { Modal } from '@components'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useAuthModalStore } from '@hooks'
import { useEffect } from 'react'

export function AuthModal() {
	const supabaseClient = useSupabaseClient()
	const router = useRouter()
	const { session } = useSessionContext()

	const { close, open, isOpen } = useAuthModalStore()

	function onOpen(x_isOpen: boolean) {
		if (!x_isOpen) {
			close()
			return
		}
		open()
	}

	useEffect(() => {
		if (session) {
			router.refresh()
			close()
		}
	}, [session])

	return (
		<Modal
			description="Login to your account"
			isOpen={isOpen}
			title="Welcome!"
			onChange={onOpen}
		>
			<Auth
				theme="dark"
				providers={['github']}
				supabaseClient={supabaseClient}
				appearance={{
					theme: ThemeSupa,
					variables: {
						default: {
							colors: {
								brand: '#404040',
								brandAccent: '#22c55e',
							},
						},
					},
				}}
			/>
		</Modal>
	)
}

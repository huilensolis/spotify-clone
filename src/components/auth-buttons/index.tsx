'use client'

import { PrimaryBtn, SecondaryBtn } from '@components'
import { useState } from 'react'
import { useAuthModalStore, useUser } from '@hooks'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/navigation'

export function AuthButtons() {
	const { open } = useAuthModalStore()
	const [disabled, setDisabled] = useState(false)

	const { user } = useUser()

	const router = useRouter()
	const supabaseCLient = useSupabaseClient()

	const handleLogOut = async () => {
		setDisabled(true)
		const { error } = await supabaseCLient.auth.signOut()

		setDisabled(false)
		// reset any playing songs
		router.refresh()
	}

	return (
		<ul className="flex gap-4 justify-center items-center">
			{!user && (
				<>
					<li>
						<PrimaryBtn OnClick={open}>Log in</PrimaryBtn>
					</li>
					<li>
						<SecondaryBtn OnClick={open}>Sign up</SecondaryBtn>
					</li>
				</>
			)}
			{user && (
				<li>
					<SecondaryBtn OnClick={handleLogOut} disabled={disabled}>
						Log out
					</SecondaryBtn>
				</li>
			)}
		</ul>
	)
}

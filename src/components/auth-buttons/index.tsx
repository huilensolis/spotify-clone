'use client'

import { PrimaryBtn, SecondaryBtn } from '@components'
import { useState } from 'react'
import { useAuthModalStore, useUser } from '@hooks'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { UserIcon } from '../../icons'
import toast from 'react-hot-toast'

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

		if (error) {
			toast.error(error.message)
		} else {
			toast.success('logged out sucessfully')
		}
	}

	return (
		<ul className="flex gap-4 justify-center items-center">
			{!user && (
				<>
					<li>
						<PrimaryBtn onClick={open} theme="emerald">
							Log in
						</PrimaryBtn>
					</li>
					<li className="hidden md:flex md:justify-center md:items-center">
						<SecondaryBtn onClick={open}>Sign up</SecondaryBtn>
					</li>
				</>
			)}
			{user && (
				<>
					<li>
						<SecondaryBtn
							onClick={handleLogOut}
							disabled={disabled}
						>
							Log out
						</SecondaryBtn>
					</li>
					<li>
						<Link
							href={'/profile'}
							className="bg-neutral-50 text-neutral-900 font-semibold rounded-full p-2 hover:bg-slate-200 transition-all delay-75 flex justify-center items-center text-center"
						>
							<UserIcon />
						</Link>
					</li>
				</>
			)}
		</ul>
	)
}

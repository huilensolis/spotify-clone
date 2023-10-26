'use client'

import { Header, UserSongs } from '@components'
import { useUser } from '@hooks'
import { useEffect, useState } from 'react'
import { UserDetails } from '@models'

export default function ProfilePage() {
	const [userData, setUserData] = useState<UserDetails | null>(null)
	const [isLoading, setIsLoading] = useState<boolean>(true)

	const { user, userDetails } = useUser()

	useEffect(() => {
		setIsLoading(true)
		if (!user || !userDetails) {
			setUserData(null)
			return
		}

		setUserData(userDetails)
		setIsLoading(false)
	}, [user, userDetails])

	return (
		<>
			<Header>
				<article className="flex gap-4">
					{user && (
						// eslint-disable-next-line @next/next/no-img-element
						<img
							src={user.user_metadata.avatar_url}
							alt={user.user_metadata.full_name}
							className="w-32 h-32 rounded-sm object-cover"
						/>
					)}
					<div className="flex flex-col">
						<span className="text-neutral-400 pl-1 font-semibold text-lg">
							profile
						</span>
						<h1 className="text-neutral-50 font-bold text-7xl text-start">
							{userData &&
								user &&
								!isLoading &&
								userData.full_name}
							{!user && !isLoading && 'You are not logged in'}
							{isLoading && 'Loading...'}
						</h1>
					</div>
				</article>
			</Header>
			{user && <UserSongs userId={user?.id} />}
		</>
	)
}

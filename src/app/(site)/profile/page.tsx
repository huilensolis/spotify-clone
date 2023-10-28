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

	const loadingArray = Array(7).fill('')

	return (
		<div className="flex flex-col overflow-y-auto">
			<Header>
				<article className="flex gap-4 h-full">
					{user && !isLoading && (
						// eslint-disable-next-line @next/next/no-img-element
						<img
							src={user.user_metadata.avatar_url}
							alt={user.user_metadata.full_name}
							className="max-w-[8rem] max-h-[8rem] rounded-sm object-cover"
						/>
					)}
					{isLoading && (
						<figure className="bg-neutral-600 min-h-[8rem] min-w-[8rem] roundend-sm animate-pulse" />
					)}
					<div className="flex flex-col w-full">
						{!isLoading && (
							<span className="text-neutral-400 pl-1 font-semibold text-lg">
								profile
							</span>
						)}
						{isLoading && (
							<figure className="bg-neutral-600 rounded-full w-40 h-8 animate-pulse mb-2" />
						)}
						{!isLoading && (
							<h1 className="text-neutral-50 font-bold text-7xl text-start">
								{userData && user && userData.full_name}
								{!user && !isLoading && 'You are not logged in'}
							</h1>
						)}
						{isLoading && (
							<figure className="h-16 w-96 bg-neutral-600 rounded-full animate-pulse" />
						)}
					</div>
				</article>
			</Header>
			{user && !isLoading && <UserSongs userId={user?.id} />}
			{isLoading && (
				<ul className="flex flex-col gap-4 p-6 animate-pulse h-full">
					{loadingArray.map((_, index) => (
						<article className="flex p-2 gap-2" key={index}>
							<figure className="h-16 w-16 bg-neutral-600 rounded-sm" />
							<section className="flex flex-col justify-between">
								<h3 className="bg-neutral-600 h-6 w-64 rounded-full" />
								<p className="bg-neutral-600 h-4 w-36 rounded-full" />
							</section>
						</article>
					))}
				</ul>
			)}
		</div>
	)
}

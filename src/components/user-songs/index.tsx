'use client'

import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useSessionContext } from '@supabase/auth-helpers-react'

import { Song } from '@models'
import { SongCard } from '@components'
import { TriangleIcon } from '@icons'

export function UserSongs({ userId }: { userId: string }) {
	const [userSongs, setUserSongs] = useState<Song[]>([])

	const { supabaseClient } = useSessionContext()

	useEffect(() => {
		async function fetchUserSongs() {
			const { data, error } = await supabaseClient
				.from('songs')
				.select('*')
				.eq('user_id', userId)

			if (error) {
				toast.error('error while fetching the songs')
				return
			}
			if (data) {
				setUserSongs(data)
			}
		}
		fetchUserSongs()
	}, [supabaseClient, userId])

	return (
		<section className="md:p-6 p-2">
			{userSongs.length >= 1 && (
				<ul>
					{userSongs.map((song) => (
						<li key={song.id}>
							<SongCard
								rightSide={
									<figure className="aspect-square h-full w-[calc(0.5rem*2+4rem)] p-2 hidden group-hover:md:flex items-center justify-center">
										<div className="h-3/4 w-3/4 bg-green-500 rounded-full transition-all delay-75 flex justify-center items-center hover:scale-105">
											<TriangleIcon className="fill-neutral-900 transition-all delay-75 w-6 h-6 text-center flex justify-center items-center" />
										</div>
									</figure>
								}
								song={song}
							/>
						</li>
					))}
				</ul>
			)}
			{userSongs.length === 0 && (
				<span className="text0neutral-400">no songs found</span>
			)}
		</section>
	)
}

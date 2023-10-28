'use client'

import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useSessionContext } from '@supabase/auth-helpers-react'

import { Song } from '@models'
import { PlayBtn, SongCard } from '@components'
import { useOnPlay } from '../../hooks'

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

	const onPlay = useOnPlay(userSongs)

	function handleOnPLay(id: string) {
		onPlay(id)
	}

	return (
		<section className="md:p-6 p-2">
			{userSongs.length >= 1 && (
				<ul>
					{userSongs.map((song) => (
						<li key={song.id}>
							<SongCard
								onPlay={() => handleOnPLay(song.id)}
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

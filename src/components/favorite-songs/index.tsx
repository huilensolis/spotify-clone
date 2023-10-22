'use client'

import { useEffect, useState } from 'react'
import { useSessionContext } from '@supabase/auth-helpers-react'
import toast from 'react-hot-toast'

import { SongCard } from '@components'
import { Song, LikedSong } from '@models'
import { TriangleIcon } from '@icons'
import { useUser } from '@hooks'

export function FavoriteSongs() {
	const [favoritesSongs, setFavoritesSongs] = useState<LikedSong[]>([])
	const [songs, setSongs] = useState<Song[]>([])

	const { user } = useUser()

	const { supabaseClient } = useSessionContext()

	useEffect(() => {
		if (!user) {
			return
		}

		async function fetchData() {
			const { data, error } = await supabaseClient
				.from('liked_songs')
				.select('*')
				.eq('user_id', user?.id)

			if (error) {
				toast.error('there is been an error fetching the liked songs')
			}
			if (data) {
				setFavoritesSongs(data)
			}
		}

		fetchData()
	}, [supabaseClient, user])

	useEffect(() => {
		async function fetchSongs() {
			const newSongsArray: Song[] = []
			for (const song of favoritesSongs) {
				const { data, error } = await supabaseClient
					.from('songs')
					.select('*')
					.eq('id', song.song_id)
					.single()

				if (data) {
					newSongsArray.push(data as any)
				}
				if (error) {
					toast.error('some songs could be loaded')
				}
			}
			if (newSongsArray.length > 0) {
				console.log(newSongsArray)
				setSongs(newSongsArray)
			}
		}
		if (favoritesSongs.length > 0) {
			fetchSongs()
		}
	}, [favoritesSongs, supabaseClient])

	return (
		<ul className="p-6">
			{songs.length === 0 && (
				<span className="text-400">no songs available</span>
			)}
			{songs.length > 0 &&
				songs.map((song) => (
					<li key={song.id}>
						<SongCard
							song={song}
							leftSide={
								<figure className="aspect-square h-full w-[calc(0.5rem*2+4rem)] p-2 hidden group-hover:md:flex items-center justify-center">
									<div className="h-3/4 w-3/4 bg-green-500 rounded-full transition-all delay-75 flex justify-center items-center hover:scale-105">
										<TriangleIcon className="fill-neutral-900 transition-all delay-75 w-6 h-6 text-center flex justify-center items-center" />
									</div>
								</figure>
							}
						/>
					</li>
				))}
		</ul>
	)
}

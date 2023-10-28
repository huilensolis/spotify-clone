'use client'

import { useEffect, useState } from 'react'
import { useSessionContext } from '@supabase/auth-helpers-react'
import toast from 'react-hot-toast'

import { SongCard } from '@components'
import { Song, LikedSong } from '@models'
import { useOnPlay, useUser } from '@hooks'

export function FavoriteSongs() {
	const [favoritesSongs, setFavoritesSongs] = useState<LikedSong[]>([])
	const [songs, setSongs] = useState<Song[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)

	const { user } = useUser()

	const { supabaseClient } = useSessionContext()

	useEffect(() => {
		if (!user) {
			return
		}

		async function fetchData() {
			setIsLoading(true)
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
			setIsLoading(false)
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
				setSongs(newSongsArray)
			}
		}
		if (favoritesSongs.length > 0) {
			fetchSongs()
		}
	}, [favoritesSongs, supabaseClient])

	const onPlay = useOnPlay(songs)

	function handleOnPlay(id: string) {
		onPlay(id)
	}

	return (
		<ul className="p-6">
			{songs.length === 0 && !isLoading && (
				<span className="text-neutral-400">no songs available</span>
			)}
			{songs.length > 0 &&
				!isLoading &&
				songs.map((song) => (
					<li key={song.id}>
						<SongCard
							song={song}
							onPlay={() => handleOnPlay(song.id)}
						/>
					</li>
				))}
			{isLoading &&
				Array(6)
					.fill('')
					.map((_, index) => (
						<article className="flex p-2 gap-2 animate-pulse" key={index}>
							<figure className="h-16 w-16 bg-neutral-600 rounded-sm" />
							<section className="flex flex-col justify-between">
								<h3 className="bg-neutral-600 h-6 w-64 rounded-full" />
								<p className="bg-neutral-600 h-4 w-36 rounded-full" />
							</section>
						</article>
					))}
		</ul>
	)
}

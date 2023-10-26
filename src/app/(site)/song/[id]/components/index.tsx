'use client'

import { Header, SongCard } from '@components'
import { useEffect, useState } from 'react'
import { Song } from '@models'
import { useSessionContext } from '@supabase/auth-helpers-react'
import { useLoadImages } from '@hooks'
import { TriangleIcon } from '@icons'
export function SongDetails({ songId }: { songId: string }) {
	const [song, setSong] = useState<Song>({} as Song)
	const [error, setError] = useState<boolean>(false)

	const { supabaseClient } = useSessionContext()

	useEffect(() => {
		async function fetchSong() {
			const { data, error } = await supabaseClient
				.from('songs')
				.select('*')
				.eq('id', songId)
				.single()

			if (data) {
				setSong(data)
			}

			if (error) {
				setError(true)
			}
		}

		fetchSong()
	}, [songId, supabaseClient])

	const imagePath = useLoadImages(song)

	return (
		<>
			<Header>
				<article className="flex gap-4">
					{imagePath && (
						// eslint-disable-next-line @next/next/no-img-element
						<img
							src={imagePath}
							alt={song?.title}
							className="w-32 h-32 rounded-sm object-cover"
						/>
					)}
					<section>
						<h1 className="text-neutral-50 text-4xl font-bold">
							{song ? song.title : 'Loading...'}
						</h1>
						<span className="text-neutral-300">
							{song && song.author}
						</span>
					</section>
				</article>
			</Header>
			<ul className='flex flex-col p-4'>
				<li>
					{song && (
						<SongCard
							song={song}
							rightSide={
								<figure className="aspect-square h-full w-[calc(0.5rem*2+4rem)] p-2 hidden group-hover:md:flex items-center justify-center">
									<div className="h-3/4 w-3/4 bg-green-500 rounded-full transition-all delay-75 flex justify-center items-center hover:scale-105">
										<TriangleIcon className="fill-neutral-900 transition-all delay-75 w-6 h-6 text-center flex justify-center items-center" />
									</div>
								</figure>
							}
						/>
					)}
				</li>
			</ul>
		</>
	)
}

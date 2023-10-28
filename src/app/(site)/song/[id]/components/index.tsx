'use client'

import { Header, SongCard } from '@components'
import { useLoadImages, useGetSongById, useOnPlay } from '@hooks'

export function SongDetails({ songId }: { songId: string }) {
	const { song, isLoading } = useGetSongById(songId)

	const imagePath = useLoadImages(song)

	const onPlay = useOnPlay([song!])

	function handleOnPlay(id: string) {
		onPlay(id)
	}
	return (
		<>
			<Header>
				<article className="flex gap-4 md:flex-row flex-col items-center">
					{imagePath && (
						/* eslint-disable-next-line @next/next/no-img-element */
						<img
							src={imagePath}
							alt={song?.title}
							className="w-48 h-48 rounded-sm object-cover bg-center"
						/>
					)}
					<section className="flex items-start h-full md:w-max w-full flex-col">
						<h1 className="text-neutral-50 text-4xl font-bold">
							{song && !isLoading ? song.title : 'Loading...'}
						</h1>
						<span className="text-neutral-300">
							{song && !isLoading && song.author}
						</span>
					</section>
				</article>
			</Header>
			<ul className="flex flex-col p-4">
				<li>
					{song && !isLoading && (
						<SongCard
							song={song}
							onPlay={() => handleOnPlay(song.id)}
						/>
					)}
				</li>
			</ul>
		</>
	)
}

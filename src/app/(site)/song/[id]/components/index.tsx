'use client'

import { Header, SongCard, PlayBtn } from '@components'
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
							rightSide={
								<figure className="aspect-square h-[70px] w-[70px] p-1 hidden group-hover:md:flex items-center justify-center">
									<PlayBtn
										songs={[song]}
										onPlay={() => handleOnPlay(song.id)}
									/>
								</figure>
							}
						/>
					)}
				</li>
			</ul>
		</>
	)
}

'use client'

import { Song } from '@models'
import { SquareSongCard } from '@components'
import { useOnPlay } from '@hooks'

export function SongList({ songs }: { songs: Song[] }) {
	const onPlayHook = useOnPlay(songs)

	function onPlay(songId: string) {
		onPlayHook(songId)
	}
	return (
		<ul className="flex flex-wrap md:gap-4 gap-2 md:p-6 p-2 w-full 350px:justify-normal justify-center">
			{songs.length >= 1 ? (
				songs.map((song) => (
					<li key={song.id}>
						<SquareSongCard
							song={song}
							onPlay={() => onPlay(song.id)}
						/>
					</li>
				))
			) : (
				<span className="text-neutral-400">no songs available</span>
			)}
		</ul>
	)
}

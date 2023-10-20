import { Song } from '@models'
import { SquareSongCard } from '@components'

export function SongList({ songs }: { songs: Song[] }) {
	return (
		<ul className="flex flex-wrap md:gap-4 gap-2 md:p-6 p-2 w-full 350px:justify-normal justify-center">
			{songs.length >= 1 ? (
				songs.map((song) => (
					<li key={song.id}>
						<SquareSongCard song={song} />
					</li>
				))
			) : (
				<span className="text-neutral-400">no songs available</span>
			)}
		</ul>
	)
}

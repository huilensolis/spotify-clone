import { Song } from '@models'
import { SquareSongCard } from '@components'

export function SongList({ songs }: { songs: Song[] }) {
	return (
		<ul className="flex flex-wrap gap-4 p-6 w-full">
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

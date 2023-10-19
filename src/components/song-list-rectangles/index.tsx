import { Song } from '@models'
import { SongCard } from '@components'
export function SongListRectangles({ songs }: { songs: Song[] }) {
	return (
		<ul className="flex flex-wrap gap-4 p-6 w-full">
			{songs.length >= 1 ? (
				songs.map((song) => (
					<li key={song.id}>
						<SongCard song={song} />
					</li>
				))
			) : (
				<span className="text-neutral-400">no songs available</span>
			)}
		</ul>
	)
}

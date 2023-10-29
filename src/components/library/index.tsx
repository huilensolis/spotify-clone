'use client'

import { DiscIcon, PlusIcon } from '@icons'
import { type Song } from '@models'
import { SongCard } from '@components'
import {
	useAuthModalStore,
	useOnPlay,
	useUploadModalStore,
	useUser,
} from '@hooks'

export function Library({ songs }: { songs: Song[] }) {
	const { open: openAuthModal } = useAuthModalStore()
	const { open: openUploadModal } = useUploadModalStore()
	const { user } = useUser()

	const onPlay = useOnPlay(songs)

	const handleOnclick = () => {
		// we check the user is logged
		if (!user) {
			openAuthModal()
			return
		}

		openUploadModal()
		return
	}

	function handleOnPlay(id: string) {
		onPlay(id)
	}

	return (
		<section className="flex flex-col gap-4 w-full h-full">
			<header className="flex gap-4 justify-between px-2">
				<section className="flex gap-4">
					<DiscIcon className="h-6 w-6 fill-neutral-400" />
					<h2 className="text-neutral-400 font-semibold">Library</h2>
				</section>
				<button onClick={handleOnclick}>
					<PlusIcon className="h-6 w-6 fill-neutral-400 hover:fill-neutral-50 transition-all delay-75" />
				</button>
			</header>
			<ul className="flex flex-col overflow-y-auto gap-2 h-full w-[calc(100%-6.5px)]">
				{songs.length >= 1 &&
					songs.map((song) => (
						<li key={song.id} className="w-full">
							<SongCard
								song={song}
								onPlay={() => handleOnPlay(song.id)}
							/>
						</li>
					))}
				{songs.length === 0 && (
					<li>
						<span className="text-neutral-400">
							no songs available.
						</span>
					</li>
				)}
			</ul>
		</section>
	)
}

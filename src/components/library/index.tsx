'use client'

import { DiscIcon, PLusIcon } from '@icons'
import { type Song } from '@models'
import { SongCard } from '@components'
import { useAuthModalStore, useUploadModalStore, useUser } from '../../hooks'

export function Library({ songs }: { songs: Song[] }) {
	const { open: openAuthModal } = useAuthModalStore()
	const { open: openUploadModal } = useUploadModalStore()
	const { user } = useUser()

	const handleOnclick = () => {
		// we check the user is logged
		if (!user) {
			openAuthModal()
			return
		}

		// TODO: check for subscription type

		openUploadModal()
		return
	}

	return (
		<section className="flex flex-col gap-4 w-full h-full">
			<header className="flex gap-4 justify-between px-2">
				<section className="flex gap-4">
					<DiscIcon className="h-6 w-6 fill-neutral-400" />
					<h2 className="text-neutral-400 font-semibold">Library</h2>
				</section>
				<button onClick={handleOnclick}>
					<PLusIcon className="h-6 w-6 fill-neutral-400 hover:fill-neutral-50 transition-all delay-75" />
				</button>
			</header>
			<ul className="flex flex-col overflow-y-auto gap-2 h-full w-[calc(100%-6.5px)]">
				{songs.length >= 1 ? (
					songs.map((song) => (
						<li key={song.id} className="w-full">
							<SongCard song={song} />
						</li>
					))
				) : (
					<span className="text-neutral-400">no songs available</span>
				)}
			</ul>
		</section>
	)
}
//h-[calc(100vh-180px)] w-[calc(100%-7px)]

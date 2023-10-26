'use client'

import { DiscIcon, PLusIcon, TriangleIcon } from '@icons'
import { type Song } from '@models'
import { SongCard } from '@components'
import { useAuthModalStore, useUploadModalStore, useUser } from '@hooks'

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
				{songs.length >= 1 &&
					songs.map((song) => (
						<li key={song.id} className="w-full">
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
						</li>
					))}
				{songs.length === 0 && (
					<li>
						<span className="text-neutral-400">
							no songs available
						</span>
					</li>
				)}
			</ul>
		</section>
	)
}

'use client'

import { Song } from '@models'
import { useLoadImages } from '@hooks'
import { TriangleIcon } from '@icons'

export function SongCard({ song }: { song: Song }) {
	const imagePath = useLoadImages(song)
	return (
		<article className="flex w-full max-h-[calc(0.5rem*2+4rem)] gap-2 bg-transparent hover:bg-neutral-800 transition-all delay-75 p-2 pb-3 rounded-md cursor-pointer group relative">
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img
				src={imagePath ?? ''}
				alt={song.title}
				className="w-16 h-16 object-cover rounded-sm"
			/>
			<section className="flex flex-col justify-between">
				<h3 className="text-neutral-50 font-semibold">{song.title}</h3>
				<p className="text-neutral-400">{song.author}</p>
			</section>
			<figure className="aspect-square h-full w-[calc(0.5rem*2+4rem)] absolute right-0 top-0 p-2 hidden group-hover:flex items-center justify-center">
				<div className="h-3/4 w-3/4 bg-green-500 rounded-full transition-all delay-75 flex justify-center items-center hover:scale-105">
					<TriangleIcon className="fill-neutral-900 transition-all delay-75 w-6 h-6 text-center flex justify-center items-center" />
				</div>
			</figure>
		</article>
	)
}

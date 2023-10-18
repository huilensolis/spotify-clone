'use client'
import { Song } from '@models'
import { useLoadImages } from '@hooks'
import { TriangleIcon } from '@icons'

export function SquareSongCard({ song }: { song: Song }) {
	const imagePath = useLoadImages(song)
	return (
		<article className="flex flex-col w-full h-max gap-2 bg-neutral-800/60 hover:bg-neutral-800 transition-all delay-75 p-3 rounded-lg cursor-pointer group">
			<div className="w-32 h-32 relative">
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src={imagePath ?? ''}
					alt={song.title}
					className="w-full h-full object-cover rounded-md"
				/>
				<figure className="aspect-square h-[70px] w-[70px] p-1 absolute right-0 bottom-0 hidden group-hover:flex items-center justify-center">
					<div className="h-full w-full bg-green-500 rounded-full transition-all delay-75 flex justify-center items-center hover:scale-105">
						<TriangleIcon className="fill-neutral-900 transition-all delay-75 w-6 h-6 text-center flex justify-center items-center" />
					</div>
				</figure>
			</div>
			<section className="flex flex-col justify-between">
				<h3 className="text-neutral-50 font-semibold">{song.title}</h3>
				<p className="text-neutral-400">{song.author}</p>
			</section>
		</article>
	)
}

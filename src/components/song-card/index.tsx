'use client'

import { ReactNode } from 'react'
import { Song } from '@models'
import { useLoadImages } from '@hooks'
import { LikeButton } from '@components'
import Link from 'next/link'

export function SongCard({
	song,
	leftSide,
}: {
	song: Song
	leftSide: ReactNode
}) {
	const imagePath = useLoadImages(song)
	return (
		<Link href={`/song/${song.id}`} >
			<article className="flex justify-between items-center w-full max-h-[calc(0.5rem*2+4rem)] gap-2 bg-transparent hover:md:bg-neutral-800 transition-all delay-75 md:p-2 rounded-md cursor-pointer group">
				<div className="flex gap-2">
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						src={imagePath ?? ''}
						alt={song.title}
						className="w-16 h-16 object-cover rounded-sm"
					/>
					<section className="flex flex-col justify-between">
						<h3 className="text-neutral-50 font-semibold">
							{song.title}
						</h3>
						<p className="text-neutral-400">{song.author}</p>
					</section>
				</div>
				{leftSide}
			</article>
		</Link>
	)
}

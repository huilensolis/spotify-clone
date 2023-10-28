'use client'

import Link from 'next/link'

import { Song } from '@models'
import { useLoadImages } from '@hooks'
import { LikeButton, PlayBtn } from '..'

export function SongCard({ song, onPlay }: { song: Song; onPlay: () => void }) {
	const imagePath = useLoadImages(song)
	return (
		<article className="flex justify-between items-center w-full max-h-[calc(0.5rem*2+4rem)] gap-2 bg-transparent hover:md:bg-neutral-800 transition-all delay-75 md:p-2 rounded-md cursor-pointer group">
			<div className="flex gap-4">
				<Link href={`/song/${song.id}`}>
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
				</Link>
				<LikeButton songId={song.id} />
			</div>
			<div className="aspect-square h-[70px] w-[70px] p-1 hidden group-hover:md:flex items-center justify-center z-10">
				<PlayBtn onPlay={onPlay} />
			</div>
		</article>
	)
}

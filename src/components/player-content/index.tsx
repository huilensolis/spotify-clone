'use client'

import { Song } from '@models'
import { useLoadImages } from '@hooks'
import { LikeButton, Slider } from '@components'
import {
	BackwardsIcon,
	ForwardsIcon,
	PauseIcon,
	TriangleIcon,
	VolumeIcon,
} from '@icons'

export function PlayerContent({
	song,
	songUrl,
}: {
	song: Song
	songUrl: string
}) {
	const imageUrl = useLoadImages(song)

	const SongPlayerControlIcon = () => {
		return (
			<div className="flex justify-center items-center w-full h-full bg-neutral-200 p-2 rounded-full">
				{false ? (
					<PauseIcon className="fill-neutral-950 h-full w-full" />
				) : (
					<TriangleIcon className="fill-neutral-950 h-full w-full" />
				)}
			</div>
		)
	}

	return (
		<section className="flex md:grid md:grid-cols-3 items-center justify-center h-full w-full px-2">
			<section className="flex w-full md:gap-4 gap-1">
				{imageUrl && (
					/* eslint-disable-next-line @next/next/no-img-element */
					<img
						src={imageUrl}
						alt={song.title}
						className="w-16 h-16 bg-center object-cover rounded-sm"
					/>
				)}
				<article>
					<h4 className="text-neutral-200 md:text-2xl text-normal font-bold">
						{song.title}
					</h4>
					<span className="text-neutral-400 font-bold">
						{song.author}
					</span>
				</article>
				<LikeButton songId={song.id} />
			</section>
			<section className="flex justify-end items-center md:hidden">
				<button className="h-10 w-10">
					<SongPlayerControlIcon />
				</button>
			</section>
			<section className="hidden md:flex justify-center items-center gap-5">
				<button className="h-10 w-10 flex justify-center items-center">
					<BackwardsIcon className="fill-neutral-400 hover:fill-neutral-200 transition-all delay-75" />
				</button>
				<button className="h-10 w-10 flex justify-center items-center hover:scale-105 delay-75 transition-all">
					<SongPlayerControlIcon />
				</button>
				<button className="h-10 w-10 flex justify-center items-center">
					<ForwardsIcon className="fill-neutral-400 hover:fill-neutral-200 transition-all delay-75" />
				</button>
			</section>
			<section className="hidden md:flex justify-end items-center gap-2">
				<VolumeIcon state="active" className="fill-neutral-200" />
				<Slider />
			</section>
		</section>
	)
}

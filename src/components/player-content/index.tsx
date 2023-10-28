'use client'

import { useEffect, useState } from 'react'
import useSound from 'use-sound'

import { Song } from '@models'
import { useLoadImages, usePlayerStore, useVolumeStore } from '@hooks'
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
	const player = usePlayerStore()

	const { volume, setVolume } = useVolumeStore()

	const [isPlaying, setIsPlaying] = useState<boolean>(true)

	const [play, { pause, sound }] = useSound(songUrl, {
		volume: volume,
		onplay: () => setIsPlaying(true),
		onended: () => {
			setIsPlaying(false)
			onPlayNext()
		},
		onpause: () => setIsPlaying(false),
		format: ['mp3'],
	})

	useEffect(() => {
		sound?.play()

		return () => {
			sound?.unload()
		}
	}, [sound])

	const imageUrl = useLoadImages(song)

	function onPlay() {
		if (!isPlaying) {
			play()
			return
		}

		pause()
		return
	}

	function onPlayNext() {
		if (player.ids.length === 0 || player.ids.length === 1) return

		if (!player.activeId) {
			player.setId(player.ids[0])
			return
		}

		const indexOfCurrentSong = player.ids.indexOf(player.activeId)
		const nextSong = player.ids[indexOfCurrentSong + 1]

		if (!nextSong) {
			player.setId(player.ids[0])
			return
		}

		player.setId(nextSong)
	}

	function onPlayLast() {
		if (player.ids.length === 0 || player.ids.length === 1) return

		if (!player.activeId) {
			player.setId(player.ids[player.ids.length - 1])
			return
		}

		const indexOfCurrentSong = player.ids.indexOf(player.activeId)
		const lastSong = player.ids[indexOfCurrentSong - 1]

		if (!lastSong) {
			player.setId(player.ids[player.ids.length - 1])
			return
		}

		player.setId(lastSong)
	}

	function toggleVolume() {
		if (volume === 0) {
			setVolume(1)
			return
		}

		setVolume(0)
	}

	const SongPlayerControlIcon = ({ ...props }) => {
		return (
			<div className="flex justify-center items-center w-full h-full bg-neutral-200 p-2 rounded-full">
				{isPlaying ? (
					<PauseIcon
						className="fill-neutral-950 h-full w-full"
						{...props}
					/>
				) : (
					<TriangleIcon
						className="fill-neutral-950 h-full w-full"
						{...props}
					/>
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
				<button
					className="h-10 w-10 flex justify-center items-center"
					onClick={onPlayLast}
				>
					<BackwardsIcon className="fill-neutral-400 hover:fill-neutral-200 transition-all delay-75" />
				</button>
				<button
					className="h-10 w-10 flex justify-center items-center hover:scale-105 delay-75 transition-all"
					onClick={onPlay}
				>
					<SongPlayerControlIcon />
				</button>
				<button
					className="h-10 w-10 flex justify-center items-center"
					onClick={onPlayNext}
				>
					<ForwardsIcon className="fill-neutral-400 hover:fill-neutral-200 transition-all delay-75" />
				</button>
			</section>
			<section className="hidden md:flex justify-end items-center gap-2">
				<button onClick={toggleVolume}>
					<VolumeIcon
						state={volume === 0 ? 'muted' : 'active'}
						className="fill-neutral-200"
					/>
				</button>
				<Slider value={volume} onChange={(value) => setVolume(value)} />
			</section>
		</section>
	)
}

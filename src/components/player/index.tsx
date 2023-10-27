'use client'

import { useGetSongById, useLoadSongUrl, usePlayerStore } from '@hooks'

export function Player() {
	const player = usePlayerStore()

	const { song, isLoading } = useGetSongById(player.activeId ?? null)

	const songUrl = useLoadSongUrl(song!)

	if (!song || isLoading || !player.activeId || !songUrl) return null

	return (
		<section className="flex items-center justify-center bg-neutral-950 fixed bottom-0 left-0 h-20 w-full py-2 px-2">
			<h4>{song.title}</h4>
		</section>
	)
}

'use client'

import { usePlayerStore } from '@hooks'

export function Player() {
	const player = usePlayerStore()

	return (
		<section className="flex items-center justify-center bg-neutral-950 absolute bottom-0 left-0 h-44 w-full">
			player
		</section>
	)
}



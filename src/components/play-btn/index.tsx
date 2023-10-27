'use client'

import { TriangleIcon } from '@icons'

export function PlayBtn({ onPlay }: { onPlay: () => void }) {
	return (
		<button
			className="aspect-square h-full w-full flex items-center justify-center"
			onClick={onPlay}
		>
			<div className="h-full w-full bg-green-500 rounded-full transition-all delay-75 flex justify-center items-center hover:scale-105">
				<TriangleIcon className="fill-neutral-900 transition-all delay-75 w-6 h-6 text-center flex justify-center items-center" />
			</div>
		</button>
	)
}

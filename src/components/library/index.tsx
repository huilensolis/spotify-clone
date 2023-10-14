'use client'

import { DiscIcon, PLusIcon } from '@icons/index'
import { useState } from 'react'
import { type SongMetadata } from '@models/index'
import { SongCard } from '@components/index'

export function Library() {
	const [disableBtn, setDisableBtn] = useState<boolean>(false)

	const handleOnclick = () => {
		setDisableBtn(true)

		try {
			// we uplaod the iamge
		} catch (error) {
			// catch error
		} finally {
			setDisableBtn(false)
		}
	}

	const mockSongs: SongMetadata[] = Array(16).fill({
		image: 'https://i.pinimg.com/564x/53/35/34/5335343123bb168b1a1c757f10a931f5.jpg',
		title: 'my song title',
		author: 'Michael Jordan',
	})

	return (
		<section className="flex flex-col gap-4 w-full h-full">
			<header className="flex gap-4 justify-between">
				<section className="flex gap-4">
					<DiscIcon className="h-6 w-6 fill-neutral-400" />
					<h2 className="text-neutral-400 font-semibold">Library</h2>
				</section>
				<button
					onClick={handleOnclick}
					disabled={disableBtn}
					aria-disabled={disableBtn}
				>
					<PLusIcon className="h-6 w-6 fill-neutral-400 hover:fill-neutral-50 transition-all delay-75" />
				</button>
			</header>
			<ul className="flex flex-col h-full overflow-y-auto gap-4 w-[calc(100%-6.5px)]">
				{mockSongs.map((song, index) => (
					<li key={index}>
						<SongCard
							author={song.author}
							image={song.image}
							title={song.title}
						/>
					</li>
				))}
			</ul>
		</section>
	)
}
//h-[calc(100vh-180px)] w-[calc(100%-7px)]

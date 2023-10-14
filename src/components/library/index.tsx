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

	const mockSongs: SongMetadata[] = Array(4).fill({
		image: 'https://i.pinimg.com/564x/53/35/34/5335343123bb168b1a1c757f10a931f5.jpg',
		title: 'my song title',
		author: 'Michael Jordan',
	})

	return (
		<section className="flex flex-col h-full gap-4">
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
			<div>
				<ul className="flex flex-col overflow-y-auto gap-4">
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
			</div>
		</section>
	)
}

'use client'

import { useEffect, useRef, useState } from 'react'

import { Box2, Input, SongCard } from '@components'
import { Song } from '@models'
import { useOnPlay } from '../../hooks'

export function SearchSongs() {
	const [inputValue, setInputValue] = useState('')
	const [searchValue, setSearchValue] = useState('')
	const [songs, setSongs] = useState<Song[]>([])
	const [isLoading, setIsloading] = useState<boolean>(false)

	const isFirstTimeRender = useRef(true)

	const valueRef = useRef<string>(inputValue)
	useEffect(() => {
		if (isFirstTimeRender.current === true) {
			return
		}

		const timeout = setTimeout(() => {
			if (valueRef.current === inputValue) return

			setSearchValue(inputValue)

			valueRef.current = inputValue
		}, 500)
		return () => clearTimeout(timeout)
	}, [inputValue])

	useEffect(() => {
		if (isFirstTimeRender.current === true) {
			isFirstTimeRender.current = false
			return
		}
		if (searchValue === '') {
			setSongs([])
			return
		}

		if (
			!searchValue
				.toLowerCase()
				.startsWith(valueRef.current.toLowerCase())
		) {
			setSongs([])
		}
		async function fetchSongs() {
			setIsloading(true)
			try {
				const response = await fetch(`/api/song/search/${searchValue}`)
				const songsSearched = await response.json()

				if (songsSearched.length >= 1) {
					setSongs(songsSearched)
				} else {
					setSongs([])
				}
			} catch (error) {
				console.log(error)
			}
			setIsloading(false)
		}
		fetchSongs()
	}, [searchValue])

	function handleOnchange(e: React.FormEvent<HTMLInputElement>) {
		setInputValue(e.currentTarget.value)
	}

	const onPlay = useOnPlay(songs)

	function handleOnPlay(id: string) {
		onPlay(id)
	}
	return (
		<>
			<div className="w-full flex flex-col gap-2 md:p-6 p-2">
				<Input
					type="text"
					placeholder="Carmilia"
					className="w-full"
					onChange={(e) => handleOnchange(e)}
				/>
				<ul>
					{songs.length > 0 &&
						!isLoading &&
						songs.length >= 1 &&
						songs.map((song) => (
							<li key={song.id}>
								<SongCard
									song={song}
									onPlay={() => handleOnPlay(song.id)}
								/>
							</li>
						))}
					{!isLoading && songs.length === 0 && searchValue !== '' && (
						<p className="text-neutral-400">not found</p>
					)}
					{isLoading &&
						Array(6)
							.fill('')
							.map((_, index) => (
								<article
									className="flex p-2 gap-2 animate-pulse"
									key={index}
								>
									<figure className="h-16 w-16 bg-neutral-600 rounded-sm" />
									<section className="flex flex-col justify-between">
										<h3 className="bg-neutral-600 h-6 w-64 rounded-full" />
										<p className="bg-neutral-600 h-4 w-36 rounded-full" />
									</section>
								</article>
							))}
				</ul>
			</div>
		</>
	)
}

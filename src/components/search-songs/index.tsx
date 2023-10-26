'use client'

import { useEffect, useRef, useState } from 'react'

import { Box2, Input, SongCard, LikeButton } from '@components'
import { Song } from '@models'

export function SearchSongs() {
	const [inputValue, setInputValue] = useState('')
	const [searchValue, setSearchValue] = useState('')
	const [songs, setSongs] = useState<Song[]>([])
	const [errorMessage, setErrorMessage] = useState<string>('')
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
			setErrorMessage('')
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
					setErrorMessage('')
				} else {
					setSongs([])
					setErrorMessage('not found')
				}
			} catch (error) {
				setErrorMessage(
					'there its been an error trying to get the songs, please try again'
				)
				console.log(error)
			}
			setIsloading(false)
		}
		fetchSongs()
	}, [searchValue])

	function handleOnchange(e: React.FormEvent<HTMLInputElement>) {
		setInputValue(e.currentTarget.value)
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
				{(songs.length >= 1 ||
					errorMessage.length >= 1 ||
					isLoading) && (
					<Box2>
						<ul>
							{songs.length >= 1 &&
								songs.map((song) => (
									<li key={song.id}>
										<SongCard
											song={song}
											rightSide={
												<div className="md:p-6 p-2">
													<LikeButton
														songId={song.id}
													/>
												</div>
											}
										/>
									</li>
								))}
							{errorMessage.length >= 1 && (
								<p className="text-neutral-500">
									{errorMessage}
								</p>
							)}
							{isLoading && (
								<p className="text-neutral-500">Loading</p>
							)}
						</ul>
					</Box2>
				)}
			</div>
		</>
	)
}

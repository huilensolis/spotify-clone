'use client'

import { useSessionContext } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import { useAuthModalStore, useUser } from '@hooks'
import { HeartEmpty, HeartFill } from '@icons'

export function LikeButton({ songId }: { songId: string }) {
	const { supabaseClient } = useSessionContext()

	const { user } = useUser()

	const { open } = useAuthModalStore()

	const [isLiked, setIsLiked] = useState<boolean>(false)
	const [disableBtn, setDisableBtn] = useState<boolean>(false)

	useEffect(() => {
		if (!user) {
			return
		}

		const fetchData = async () => {
			setDisableBtn(true)
			const { data, error } = await supabaseClient
				.from('liked_songs')
				.select('*')
				.eq('user_id', user.id)
				.eq('song_id', songId)
				.single()

			if (data && !error) {
				setIsLiked(true)
			}
			setDisableBtn(false)
		}

		fetchData()
	}, [supabaseClient, setIsLiked, open, songId, user])

	async function handleOnClick() {
		if (!user) {
			return open()
		}

		setDisableBtn(true)

		if (isLiked) {
			const { error } = await supabaseClient
				.from('liked_songs')
				.delete()
				.eq('user_id', user.id)
				.eq('song_id', songId)
				.single()
			console.log({ error })
			if (error) {
				toast.error(
					'There is been an error while removing the song from favorites'
				)
			}
			if (!error) {
				toast.success('Removed from favorites')
				setIsLiked(false)
			}
			setDisableBtn(false)
			return
		}

		if (!isLiked) {
			const { error } = await supabaseClient.from('liked_songs').insert({
				user_id: user.id,
				song_id: songId,
			})

			if (!error) {
				toast.success('Added to favorites')
				setIsLiked(true)
			}

			if (error) {
				toast.error(
					'There its been an error while adding the song to favorites'
				)
			}
			setDisableBtn(false)
			return
		}
	}

	return (
		<button
			disabled={disableBtn}
			aria-disabled={disableBtn}
			onClick={handleOnClick}
		>
			{isLiked ? (
				<HeartFill className="fill-emerald-600" />
			) : (
				<HeartEmpty className="fill-neutral-50" />
			)}
		</button>
	)
}

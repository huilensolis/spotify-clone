'use client'

import { Modal, Input, PrimaryBtn } from '@components'

import { useUploadModalStore, useUser } from '@hooks'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import uniqid from 'uniqid'

export function UploadModal() {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const { user } = useUser()
	const supabaseClient = useSupabaseClient()
	const router = useRouter()
	const { close, open, isOpen: isOpenFromStore } = useUploadModalStore()
	const { register, handleSubmit, reset } = useForm({
		defaultValues: {
			title: '',
			author: '',
			song: null,
			image: null,
		},
	})

	function onOpen(isOpen: boolean) {
		if (!isOpen) {
			reset()
			close()
			return
		}
		open()
	}

	const onSubmit: SubmitHandler<FieldValues> = async (values) => {
		try {
			setIsLoading(true)

			const title = values.title
			const author = values.author
			const songFile = values.song?.[0]
			const imageFile = values.image?.[0]

			if (!songFile || !imageFile || !user || !title || !author) {
				return toast.error('Please select a song and image')
			}

			const uniqueID = uniqid()

			// upload song
			const songId = `song-${title}-${uniqueID}`
			const { data: songData, error: songError } =
				await supabaseClient.storage
					.from('songs')
					.upload(songId, songFile, {
						upsert: false,
					})
			console.log(songData)
			if (songError) {
				setIsLoading(false)
				toast.error('there its been an error uploading the song file')
				return
			}

			// upload image
			const imageId = `image-${title}-${uniqueID}`
			const { data: imageData, error: imageError } =
				await supabaseClient.storage
					.from('images')
					.upload(imageId, imageFile, {
						upsert: false,
					})
			if (imageError) {
				setIsLoading(false)
				toast.error('there its been an error uploading the image file')
				return
			}

			const { error } = await supabaseClient.from('songs').insert({
				title: title,
				author: author,
				song_path: songData.path,
				image_path: imageData.path,
			})
			if (error) {
				setIsLoading(false)
				return toast.error(error.message)
			}

			router.refresh()
			setIsLoading(false)
			reset()
			close()
			return toast.success('song uploaded')
		} catch (error) {
			return toast.error('there its been an unexpected error')
		}
	}

	return (
		<Modal
			description="Upload a mp3 file"
			isOpen={isOpenFromStore}
			title="Add a song"
			onChange={onOpen}
		>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col gap-4"
			>
				<div className="flex flex-col">
					<label
						htmlFor="title"
						className="text-neutral-200 font-semibold"
					>
						Title
					</label>
					<Input
						id="title"
						disabled={isLoading}
						type="text"
						{...register('title', { required: true })}
						placeholder="Enemy and revenge"
					/>
				</div>
				<div className="flex flex-col">
					<label
						htmlFor="author"
						className="text-neutral-200 font-semibold"
					>
						Author
					</label>
					<Input
						id="author"
						type="text"
						disabled={isLoading}
						{...register('author', { required: true })}
						placeholder="yehimihawa"
					/>
				</div>

				<div className="flex flex-col">
					<label
						htmlFor="song"
						className="text-neutral-200 font-semibold"
					>
						Select a{' '}
						<span className="text-emerald-400">song file</span>
					</label>
					<Input
						id="song"
						type="file"
						accept=".mp3"
						disabled={isLoading}
						{...register('song', { required: true })}
					/>
				</div>
				<div className="flex flex-col">
					<label
						htmlFor="image"
						className="text-neutral-200 font-semibold"
					>
						Select an{' '}
						<span className="text-emerald-400">image file</span>
					</label>
					<Input
						id="image"
						type="file"
						accept="image/*"
						disabled={isLoading}
						{...register('image', { required: true })}
					/>
				</div>
				<PrimaryBtn
					theme="emerald"
					disabled={isLoading}
					isLoading={isLoading}
					type="submit"
				>
					Publish song
				</PrimaryBtn>
			</form>
		</Modal>
	)
}

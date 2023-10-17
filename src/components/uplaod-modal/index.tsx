'use client'

import { Modal, Input } from '@components'

import { useUploadModalStore } from '@hooks'
import { useForm } from 'react-hook-form'

export function UploadModal() {
	const { close, open, isOpen: isOpenFromStore } = useUploadModalStore()

	const { register, handleSubmit, reset } = useForm({
		defaultValues: {
			author: '',
			title: '',
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

	function onSubmit() {
		// upload to supabase
	}

	return (
		<Modal
			description="Upload a mp3 file"
			isOpen={isOpenFromStore}
			title="Add a song"
			onChange={onOpen}
		>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input />
			</form>
		</Modal>
	)
}

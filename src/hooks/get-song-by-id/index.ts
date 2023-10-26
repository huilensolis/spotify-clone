import { useSessionContext } from '@supabase/auth-helpers-react'
import { useEffect, useMemo, useState } from 'react'
import toast from 'react-hot-toast'

import { Song } from '@models'

export function useGetSongById(id: string) {
	const [song, setSong] = useState<Song | null>(null)
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const { supabaseClient } = useSessionContext()

	useEffect(() => {
		if (!id) return

		async function fetchSong() {
			setIsLoading(true)

			const { data, error } = await supabaseClient
				.from('songs')
				.select('*')
				.eq('id', id)
				.single()

			if (error) {
				toast.error('there is been an error')
			}
			if (data) {
				setSong(data)
			}
			setIsLoading(false)
		}
		fetchSong()
	}, [id, supabaseClient])

	return useMemo(
		() => ({
			song,
			isLoading,
		}),
		[song, isLoading]
	)
}

import { Song } from '@models'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

export function useLoadImages(song: Song | null) {
	const supabaseCLient = useSupabaseClient()

	if (!song) {
		return null
	}

	const { data: imageData } = supabaseCLient.storage
		.from('images')
		.getPublicUrl(song.image_path)

	return imageData.publicUrl
}

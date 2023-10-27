import { Song } from '@models'
import { useSessionContext } from '@supabase/auth-helpers-react'

export function useLoadSongUrl(song: Song) {
	const { supabaseClient } = useSessionContext()

	if (!song || !supabaseClient || !song.song_path) return ''

	const { data } = supabaseClient.storage
		.from('songs')
		.getPublicUrl(song.song_path)

	return data.publicUrl
}

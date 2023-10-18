import { Song } from '@models'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export async function getSongsByUserId(): Promise<Song[]> {
	const supabase = createServerComponentClient({
		cookies: cookies,
	})

	const { data: sessionData, error: sessionError } =
		await supabase.auth.getSession()

	if (sessionError) {
		console.log(sessionError)
		return []
	}

	const { data: songsData, error: songsError } = await supabase
		.from('songs')
		.select('*')
		.eq('user_id', sessionData.session?.user.id)
		.order('created_at', { ascending: false })

	if (songsError) {
		console.log(songsError)
		return []
	}

	return (songsData as Song[]) || []
}

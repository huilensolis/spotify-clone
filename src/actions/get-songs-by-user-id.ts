import { Song } from '@models'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export const dynamic = "force-dynamic"

function getCookies() {
	return cookies()
}

export async function getSongsByUserId(): Promise<Song[]> {
	const supabase = createServerComponentClient({
		cookies: () => getCookies(),
	})

	const { data: sessionData, error: sessionError } =
		await supabase.auth.getSession()

	if (sessionError) {
		console.log(
			'there is been an error in get songs by user id with the session'
		)
		console.log(sessionError)
		return []
	}

	if (sessionData.session?.user.id) {
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

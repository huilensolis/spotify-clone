import { Song } from '@models'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { getSongs } from '.'

export async function getSongsByTitle(title: string): Promise<Song[]> {
	const supabase = createServerComponentClient({
		cookies: cookies,
	})

	if (!title) {
		const allSongs = await getSongs()
		return allSongs
	}

	const { data, error } = await supabase
		.from('songs')
		.select('*')
		.ilike('title', `%${title}%`)
		.order('created_at', { ascending: false })

	if (error) console.log('error on get song by title'), console.log(error)

	return (data as Song[]) || []
}

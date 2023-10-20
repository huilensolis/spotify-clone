import { Song } from '@models'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export const dynamic = 'force-dynamic'

function getCookies() {
	return cookies()
}

export async function getSongs(): Promise<Song[]> {
	const supabase = createServerComponentClient({
		cookies: () => getCookies(),
	})

	const { data, error } = await supabase
		.from('songs')
		.select('*')
		.order('created_at', { ascending: false })

	if (error) console.log(error)

	return (data as Song[]) || []
}

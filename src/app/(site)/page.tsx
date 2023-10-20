import { Header, SongList, Greeting, FavoritesCard } from '@components'
import { getSongs } from '@actions'

export const dynamic = "force-dynamic"

export default async function Home() {
	const songs = await getSongs()
	return (
		<>
			<Header>
				<Greeting />
				<FavoritesCard />
			</Header>
			<SongList songs={songs} />
		</>
	)
}

import { Header, SongList, Greeting, FavoritesCard } from '@components'
import { getSongs } from '@actions'

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

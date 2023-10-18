import { Header, SongList } from '@components'
import { MainLayout } from '@layouts'
import { getSongs } from '@actions'

export const revalidate = 0

export default async function Home() {
	const songs = await getSongs()
	return (
		<>
			<MainLayout>
				<Header />
				<SongList songs={songs} />
			</MainLayout>
		</>
	)
}

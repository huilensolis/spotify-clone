import { Header, SongList, Box } from '@components'
import { MainLayout } from '@layouts'
import { getSongs } from '@actions'
import { SupabaseProvider, UserProvider } from '@providers'

export const revalidate = 0

export default async function Home() {
	const songs = await getSongs()
	return (
		<>
			<SupabaseProvider>
				<UserProvider>
					<MainLayout>
						<Header />
						<SongList songs={songs} />
					</MainLayout>
				</UserProvider>
			</SupabaseProvider>
		</>
	)
}

import { Nav, Box, Library, Header, SongList } from '@components'
import { AsideLayout, MainLayout } from '@layouts'
import { SupabaseProvider, UserProvider, ModalProvider } from '@providers'
import { ToasterProvider } from '../../providers/toaster/index'
import { getSongs, getSongsByUserId } from '@actions'

export const revalidate = 0

export default async function Home() {
	const songs = await getSongs()
	const userLibrary = await getSongsByUserId()
	return (
		<>
			<div className="flex p-2 pb-0 gap-2 flex-col lg:flex-row h-full">
				<ToasterProvider />
				<SupabaseProvider>
					<UserProvider>
						<ModalProvider />
						<AsideLayout>
							<Box>
								<Nav />
							</Box>
							<Box extraStyles="hidden lg:inline-block overflow-y-auto flex-grow">
								<Library songs={userLibrary} />
							</Box>
						</AsideLayout>
						<MainLayout>
							<Header />
							<div>
								<SongList songs={songs} />
							</div>
						</MainLayout>
					</UserProvider>
				</SupabaseProvider>
			</div>
		</>
	)
}

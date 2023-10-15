import { Nav, Box, Library, Header } from '@components'
import { AsideLayout, MainLayout } from '@layouts'
import { SupabaseProvider, UserProvider, ModalProvider } from '@providers'

export default function Home() {
	return (
		<>
			<div className="flex p-2 gap-2 flex-col lg:flex-row h-full">
				<SupabaseProvider>
					<UserProvider>
						<ModalProvider />
						<AsideLayout>
							<Box>
								<Nav />
							</Box>
							<Box extraStyles="hidden lg:inline-block overflow-y-auto">
								<Library />
							</Box>
						</AsideLayout>
						<MainLayout>
							<Header />
						</MainLayout>
					</UserProvider>
				</SupabaseProvider>
			</div>
		</>
	)
}

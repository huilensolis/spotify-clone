import { Nav, Box, Library, Header } from '@components/index'
import { AsideLayout, MainLayout } from '@layouts/index'
import { SupabaseProvider } from '../../providers/supabase'
import { UserProvider } from '../../providers/user/index'

export default function Home() {
	return (
		<>
			<div className="flex p-2 gap-2 flex-col lg:flex-row h-full">
				<SupabaseProvider>
					<UserProvider>
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

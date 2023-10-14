import { Nav, Box, Library, Header } from '@components/index'
import { AsideLayout, MainLayout } from '@layouts/index'

export default function Home() {
	return (
		<>
			<div className="flex p-2 gap-2 flex-col lg:flex-row max-h-screen">
				<AsideLayout>
					<Box>
						<Nav />
					</Box>
					<Box extraStyles="hidden lg:inline-block">
						<Library />
					</Box>
				</AsideLayout>
				<MainLayout>
					<Header />
				</MainLayout>
			</div>
		</>
	)
}

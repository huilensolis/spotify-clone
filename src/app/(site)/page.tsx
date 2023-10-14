import { Nav, Box } from '@components/index'
import { AsideLayout } from '@layouts/index'
import { Library } from '@components/index'

export default function Home() {
	return (
		<>
			<div className="flex p-2 gap-2 flex-col lg:flex-row">
				<AsideLayout>
					<Box>
						<Nav />
					</Box>
					<Box extraStyles="hidden lg:inline-block">
						<Library />
					</Box>
				</AsideLayout>
				<main className="w-full h-full min-h-screen flex bg-neutral-900 rounded-md">
					main
				</main>
			</div>
		</>
	)
}

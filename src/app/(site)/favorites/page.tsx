import { Header, FavoriteSongs } from '@components'
import { MainLayout } from '@layouts'

export default function FavoritesPage() {
	return (
		<>
			<MainLayout>
				<Header>
					<h1 className="text-neutral-50 text-4xl font-bold">
						Favorites
					</h1>
				</Header>
				<FavoriteSongs />
			</MainLayout>
		</>
	)
}

import { Nav, Box } from '@components/index'
import { AsideLayout } from '@layouts/index'

export default function Home() {
	return (
		<AsideLayout>
			<Box>
				<Nav />
			</Box>
		</AsideLayout>
	)
}

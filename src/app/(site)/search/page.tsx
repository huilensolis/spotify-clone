import { Header, SearchSongs } from '@components'

export default function Page() {
	return (
		<>
			<Header>
				<h1 className="text-neutral-50 text-4xl font-bold">Search</h1>
			</Header>
			<SearchSongs />
		</>
	)
}

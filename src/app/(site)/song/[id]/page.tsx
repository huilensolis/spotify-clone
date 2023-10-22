import { SongDetails } from './components'

export default function SongPage({ params }: { params: { id: string } }) {
	return <SongDetails songId={params.id} />
}

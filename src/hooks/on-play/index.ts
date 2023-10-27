import { Song } from '@models'
import { usePlayerStore } from '@hooks'

export function useOnPlay(songs: Song[]) {
	const player = usePlayerStore()

	function onPlay(id: string) {
		player.setId(id)
		player.setIds(songs.map((song) => song.id))
	}

	return onPlay
}

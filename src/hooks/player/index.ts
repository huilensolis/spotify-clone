import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface PlayerStoreProps {
	ids: string[]
	activeId: string | null
	setId: (id: string) => void
	setIds: (ids: string[]) => void
	reset: () => void
}
export const usePlayerStore = create<PlayerStoreProps>((set, _get) => ({
	ids: [],
	activeId: null,
	setId: (id: string) => set({ activeId: id }),
	setIds: (ids: string[]) => set({ ids }),
	reset: () => set({ activeId: null, ids: [] }),
}))

interface VolumeStore {
	setVolume: (volume: number) => void
	volume: number
}
export const useVolumeStore = create(
	persist<VolumeStore>(
		(set, _get) => ({
			volume: 0.3,
			setVolume: (volume: number) => set({ volume }),
		}),
		{
			name: 'volume-store',
		}
	)
)

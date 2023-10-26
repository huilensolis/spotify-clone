import { create } from 'zustand'

interface PlayerStoreProps {
	ids: string[]
	activeId: string | null
	setId: (id: string) => void
	setIds: (ids: string[]) => void
	reset: () => void
}
export const usePlayerStore = create<PlayerStoreProps>((set, get) => ({
	ids: [],
	activeId: null,
	setId: (id: string) => set({ activeId: id }),
	setIds: (ids: string[]) => set({ ids }),
	reset: () => set({ activeId: null, ids: [] }),
}))

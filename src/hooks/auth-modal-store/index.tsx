import { create } from 'zustand'

interface AuthModalStore {
	isOpen: boolean
	open: () => void
	close: () => void
}

export const useAuthModalStore = create<AuthModalStore>((set, get) => ({
	isOpen: false,
	open: () => set({ isOpen: true }),
	close: () => set({ isOpen: false }),
}))

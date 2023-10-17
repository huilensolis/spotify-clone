import { create } from 'zustand'

interface UploadModalStore {
	isOpen: boolean
	open: () => void
	close: () => void
}

export const useUploadModalStore = create<UploadModalStore>((set, get) => ({
	isOpen: false,
	open: () => set({ isOpen: true }),
	close: () => set({ isOpen: false }),
}))

'use client'
import { ReactNode } from 'react'
import { UserContextProvider } from '@hooks'

export function UserProvider({ children }: { children: ReactNode }) {
	return <UserContextProvider>{children}</UserContextProvider>
}

'use client'

import { ReactNode, useState } from 'react'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { type Database } from '@models'
import { SessionContextProvider } from '@supabase/auth-helpers-react'

export function SupabaseProvider({ children }: { children: ReactNode }) {
	const [supabaseClient] = useState(() =>
		createClientComponentClient<Database>()
	)

	return (
		<SessionContextProvider supabaseClient={supabaseClient}>
			{children}
		</SessionContextProvider>
	)
}

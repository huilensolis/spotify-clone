import { ReactNode } from 'react'

import { Nav, Box, Library, Player } from '@components'
import { AsideLayout, MainLayout } from '@layouts'
import { SupabaseProvider, UserProvider, ModalProvider } from '@providers'
import { ToasterProvider } from '@providers'
import { getSongsByUserId } from '@actions'

export const dynamic = 'force-dynamic'

export async function GlobalLayout({ children }: { children: ReactNode }) {
	const userLibrary = await getSongsByUserId()

	return (
		<div className="bg-black h-screen w-full text-neutral-50 overflow-y-hidden [&>*]:focus:outline-1 [&>*]:focus:outline-neutral-700">
			<div className="flex p-2 pb-0 gap-2 flex-col lg:flex-row h-full">
				<ToasterProvider />
				<SupabaseProvider>
					<UserProvider>
						<ModalProvider />
						<AsideLayout>
							<Box>
								<Nav />
							</Box>
							<Box extraStyles="hidden lg:inline-block overflow-y-auto flex-grow">
								<Library songs={userLibrary} />
							</Box>
						</AsideLayout>
						<MainLayout>{children}</MainLayout>
						<Player />
					</UserProvider>
				</SupabaseProvider>
			</div>
		</div>
	)
}

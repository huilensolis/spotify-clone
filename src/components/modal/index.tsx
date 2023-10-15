'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode } from 'react'
import { CloseIcon } from '../../icons'

export function Modal({
	children,
	description,
	isOpen,
	onChange,
	title,
}: {
	isOpen: boolean
	onChange: (open: boolean) => void
	title: string
	description: string
	children: ReactNode
}) {
	return (
		<>
			<Dialog.Root
				open={isOpen}
				defaultOpen={isOpen}
				onOpenChange={onChange}
			>
				<Dialog.Portal>
					<Dialog.Overlay className="bg-neutral-950/90 fixed inset-0 flex justify-center items-center">
						<Dialog.Content className="drop-shadow-md border border-neutral-700 max-h-full md:h-auto md:max-h-[85vh] w-full h-full md:w-[90vw] md:max-w-[450px] rounded-md bg-neutral-800 focus:outline-none focus-visible:outline-none p-6 text-neutral-50">
							<Dialog.Title className="text-xl text-center font-bold mb-4">
								{title}
							</Dialog.Title>
							<Dialog.Description className="mb-5 text-sm leading-normal text-center font-medium">
								{description}
							</Dialog.Description>
							{children}
							<Dialog.Close asChild>
								<button className="transition-all delay-75 absolute top-2 right-2 inline-flex appearance-none items-center justify-center rounded-md outline-none hover:bg-neutral-600 p-[1px]">
									<CloseIcon className="h-6 w-6 fill-neutral-400 hover:fill-neutral-300 " />
								</button>
							</Dialog.Close>
						</Dialog.Content>
					</Dialog.Overlay>
				</Dialog.Portal>
			</Dialog.Root>
		</>
	)
}

'use client'

import { ArrowLeftIcon } from '@icons'

import { useRouter } from 'next/navigation'
import { AuthButtons } from '@components'

export function Header() {
	const router = useRouter()

	const dayMoments = [
		{ time: 6, moment: 'morning' },
		{ time: 12, moment: 'afternoon' },
		{ time: 17, moment: 'evening' },
		{ time: 20, moment: 'night' },
	]
	const actualTime = new Date().getHours()
	const getDayMoment = () => {
		for (let i = 0; i < dayMoments.length; i++) {
			const thisMoment = dayMoments[i]
			const nextMoment = dayMoments[i + 1]

			if (!nextMoment) {
				return thisMoment.moment
			}

			if (
				actualTime >= thisMoment.time &&
				actualTime <= nextMoment.time
			) {
				return thisMoment.moment
			}
		}
	}

	return (
		<header className="flex flex-col h-fit bg-gradient-to-b from-emerald-800 p-6 rounded-md overflow-hidden gap-4">
			<div className="gap-2 lg:flex hidden justify-between w-full">
				<div className="flex gap-2 justify-center items-center">
					<button
						onClick={router.back}
						className="flex justify-center items-center bg-neutral-950 p-2 rounded-full hover:bg-neutral-900 transition-all delay-75 group"
					>
						<ArrowLeftIcon className="h-4 w-4 fill-neutral-400 group-hover:fill-neutral-50 transition-all delay-75" />
					</button>
					<button
						onClick={router.forward}
						className="flex justify-center items-center bg-neutral-950 p-2 rounded-full hover:bg-neutral-900 transition-all delay-75 group"
					>
						<ArrowLeftIcon className="h-4 w-4 rotate-180 fill-neutral-400 group-hover:fill-neutral-50 transition-all delay-75" />
					</button>
				</div>
				<AuthButtons />
			</div>
			<h1 className="text-neutral-50 text-4xl font-bold">
				Good {getDayMoment()}
			</h1>
		</header>
	)
}

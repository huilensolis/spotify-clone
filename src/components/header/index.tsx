'use client'

import { ArrowLeftIcon, HeartFill, TriangleIcon } from '@icons'

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
			<article className="flex rounded-md overflow-hidden cursor-pointer group relative backdrop-blur-sm bg-neutral-400/20 h-16 w-64">
				<figure className="flex w-16 h-16 justify-center items-center bg-gradient-to-tl from-purple-400 to-blue-800">
					<HeartFill className="fill-neutral-50" />
				</figure>
				<section className="pl-4 flex items-center pr-16">
					<h2 className="text-neutral-50 font-medium">Liked songs</h2>
					<figure className="aspect-square h-[70px] w-[70px] p-1 absolute right-0 hidden group-hover:flex items-center justify-center">
						<div className="h-full w-full bg-green-500 rounded-full transition-all delay-75 flex justify-center items-center hover:scale-105">
							<TriangleIcon className="fill-neutral-900 transition-all delay-75 w-6 h-6 text-center flex justify-center items-center" />
						</div>
					</figure>
				</section>
			</article>
		</header>
	)
}

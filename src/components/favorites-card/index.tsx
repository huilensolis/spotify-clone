import { TriangleIcon, HeartFill } from '@icons'
import Link from 'next/link'

export function FavoritesCard() {
	return (
		<Link href="/favorites">
			<article className="flex rounded-md overflow-hidden cursor-pointer group relative backdrop-blur-sm bg-neutral-400/20 h-16 md:w-72 w-full">
				<figure className="flex w-16 h-16 justify-center items-center bg-gradient-to-tl from-purple-400 to-blue-800">
					<HeartFill className="fill-neutral-50" />
				</figure>
				<section className="pl-4 flex items-center md:pr-16 pr-4">
					<h2 className="text-neutral-50 font-bold">Liked songs</h2>
				</section>
			</article>
		</Link>
	)
}

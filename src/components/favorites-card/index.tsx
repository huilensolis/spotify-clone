import { TriangleIcon, HeartFill } from '@icons'

export function FavoritesCard() {
	return (
		<article className="flex rounded-md overflow-hidden cursor-pointer group relative backdrop-blur-sm bg-neutral-400/20 h-16 md:w-72 w-full">
			<figure className="flex w-16 h-16 justify-center items-center bg-gradient-to-tl from-purple-400 to-blue-800">
				<HeartFill className="fill-neutral-50" />
			</figure>
			<section className="pl-4 flex items-center md:pr-16 pr-4">
				<h2 className="text-neutral-50 font-medium">Liked songs</h2>
				<figure className="aspect-square h-[70px] w-[70px] p-1 absolute right-0 hidden group-hover:md:flex items-center justify-center">
					<div className="h-full w-full bg-green-500 rounded-full transition-all delay-75 flex justify-center items-center hover:scale-105">
						<TriangleIcon className="fill-neutral-900 transition-all delay-75 w-6 h-6 text-center flex justify-center items-center" />
					</div>
				</figure>
			</section>
		</article>
	)
}

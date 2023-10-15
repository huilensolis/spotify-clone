import { SongMetadata } from '@models'
import Image from 'next/image'

export function SongCard({ image, title, author }: SongMetadata) {
	return (
		<article className="flex gap-2 bg-neutral-900 hover:bg-neutral-800 transition-all delay-75 p-2 rounded-sm cursor-pointer">
			<img
				src={image}
				alt={title}
				className="w-14 h-full object-cover rounded-sm"
			/>
			<section className="flex flex-col justify-between">
				<h3 className="text-neutral-50 ">{title}</h3>
				<p className="text-neutral-400">{author}</p>
			</section>
		</article>
	)
}

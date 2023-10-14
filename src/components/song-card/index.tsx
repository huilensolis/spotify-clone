import { SongMetadata } from '@models/index'
import Image from 'next/image'

export function SongCard({ image, title, author }: SongMetadata) {
	return (
		<article className="flex gap-2">
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

export function Greeting() {
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
		<h1 className="text-neutral-50 text-4xl font-bold">
			Good {getDayMoment()}
		</h1>
	)
}

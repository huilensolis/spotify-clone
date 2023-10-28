'use client'

import * as RadixSlider from '@radix-ui/react-slider'

export function Slider({
	value = 1,
	onChange,
}: {
	value: number
	onChange: (value: number) => void
}) {
	function handleOnChange(newValue: number[]) {
		onChange(newValue[0])
	}
	return (
		<RadixSlider.Root
			defaultValue={[1]}
			className="relative flex items-center select-none w-28 h-10"
			value={[value]}
			onValueChange={handleOnChange}
			max={1}
			step={0.1}
			aria-label="Volume"
		>
			<RadixSlider.Track className="bg-neutral-600 relative grow rounded-full h-[3px]">
				<RadixSlider.Range className="absolute bg-neutral-600 rounded-full h-full w-full" />
				<RadixSlider.SliderRange className="absolute bg-neutral-50 rounded-full h-full" />
				<RadixSlider.SliderThumb className="inline-block bg-neutral-50 rounded-full h-3 w-3 -translate-y-[0.65rem]" />
			</RadixSlider.Track>
		</RadixSlider.Root>
	)
}

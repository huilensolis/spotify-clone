'use client'

import { LinkFill, LinkNormal, SecondaryBtn } from '@components/index'
import { useState } from 'react'

export function AuthButtons() {
	const [isLogged, setIsLogged] = useState(false)
	return (
		<ul className="flex gap-4">
			{!isLogged && (
				<>
					<li>
						<LinkFill href="/auth">Log in</LinkFill>
					</li>
					<li>
						<LinkNormal href="/auth">Sign up</LinkNormal>
					</li>
				</>
			)}
			{isLogged && (
				<li>
					<SecondaryBtn OnClick={() => {}} disabled={false}>
						Log out
					</SecondaryBtn>
				</li>
			)}
		</ul>
	)
}

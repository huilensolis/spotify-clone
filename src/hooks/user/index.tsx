import { createContext, useContext, useEffect, useState } from 'react'
import { User } from '@supabase/auth-helpers-nextjs'
import { Subscription, UserDetails } from '@models'
import {
	useSessionContext,
	useUser as useSupabaseUser,
} from '@supabase/auth-helpers-react'

type useContextType = {
	accesToken: string | null
	user: User | null
	userDetails: UserDetails | null
	isLoading: boolean
	userSubscription: Subscription | null
}

const UserContext = createContext<useContextType | undefined>(undefined)

export interface Props {
	[propName: string]: any
}

export function UserContextProvider(props: Props) {
	const {
		session,
		isLoading: isLoadingUser,
		supabaseClient: supabase,
	} = useSessionContext()

	const user = useSupabaseUser()

	const accesToken = session?.access_token ?? null

	const [isLoadingData, setIsLoadingData] = useState(false)
	const [userDetails, setUserDetails] = useState<UserDetails | null>(null)
	const [userSubscription, setUserSubscription] =
		useState<Subscription | null>(null)

	function getUserDetails() {
		return supabase.from('users').select('*').single()
	}

	function getUserSubscription() {
		return supabase
			.from('subscriptions')
			.select('*, prices(*, products(*))')
			.in('status', ['trialing', 'active'])
			.single()
	}

	useEffect(() => {
		async function fetchData() {
			setIsLoadingData(true)
			try {
				const [userDetails, userSubscription] = await Promise.all([
					getUserDetails(),
					getUserSubscription(),
				])

				setUserDetails(userDetails.data as UserDetails)
				setUserSubscription(userSubscription.data as Subscription)
			} catch (error) {
				setUserDetails(null)
				setUserSubscription(null)
			}
			setIsLoadingData(false)
		}
		// if we are logged in but we dont have the user data or subscription
		if (user && !isLoadingData && !userDetails && !userSubscription) {
			fetchData()
			return
		}
		if (!user && !isLoadingData && !isLoadingUser) {
			setUserDetails(null)
			setUserSubscription(null)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user, isLoadingUser])

	const value = {
		accesToken,
		user,
		userDetails,
		userSubscription,
		isLoading: isLoadingUser || isLoadingData,
	}

	return <UserContext.Provider value={value} {...props} />
}

export const useUser = () => {
	const context = useContext(UserContext)

	if (context === undefined) {
		throw new Error('useUser must be used within a UserContextProvider')
	}
	return context
}

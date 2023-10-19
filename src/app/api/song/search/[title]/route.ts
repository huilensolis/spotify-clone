import { NextRequest, NextResponse } from 'next/server'
import { getSongsByTitle } from '@actions'

export async function GET(
	req: NextRequest,
	{ params }: { params: { title: string } }
) {
	const songs = await getSongsByTitle(params.title)
	return NextResponse.json(songs)
}

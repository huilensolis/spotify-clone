import { NextResponse } from 'next/server'

export default function GET() {
	return NextResponse.json({ data: 'Hello World' })
}

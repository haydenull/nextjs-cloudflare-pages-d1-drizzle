import { NextResponse } from 'next/server'

import { getUsers } from '@/services/actions'

export const runtime = 'edge'

export const GET = async () => {
  const res = await getUsers()
  return NextResponse.json(res)
}

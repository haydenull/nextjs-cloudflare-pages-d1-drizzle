'use server'

// https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations
import { db } from '@/db'

/** get users */
export const getUsers = async () => {
  const users = await db.query.usersTable.findMany()
  return users
}

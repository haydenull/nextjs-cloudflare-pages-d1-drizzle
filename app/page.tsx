import { ThemeToggle } from '@/components/ThemeToggle'
import { getUsers } from '@/services/actions'

export const runtime = 'edge'

export default async function Home() {
  const users = await getUsers()
  return (
    <div>
      <ThemeToggle />
      <h1>Users</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  )
}

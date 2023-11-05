import { currentUser } from '@clerk/nextjs'

import { Separator } from '@/components/ui/separator'
import { Profile } from './profile'

export default async function Settings() {
  // const user = await currentUser()

  return <Profile />
}

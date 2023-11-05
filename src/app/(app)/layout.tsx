import { Header } from '@/components/header'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { UserNav } from '@/components/user-nav'
import Link from 'next/link'
import { ReactNode } from 'react'
import { Providers } from './provider'

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background min-h-screen">
      <Providers>
        <Header />

        <main className="p-6 max-w-7xl mx-auto">{children}</main>
      </Providers>
    </div>
  )
}

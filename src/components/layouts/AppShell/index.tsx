import React from 'react'
import Navbar from '../Navbar'
import { type } from 'os'

type AppShellProps = {
  children: React.ReactNode
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  )
}

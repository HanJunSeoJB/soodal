'use client'
import { SessionProvider } from "next-auth/react"

export default function Layout({ children, session }){

  return (
    <SessionProvider
    session={session}
    refetchInterval={5 * 60}
    >
      {children}
    </SessionProvider>
  )
}
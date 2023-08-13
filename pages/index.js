import Image from 'next/image'
import { Inter } from 'next/font/google'
import { SessionProvider } from "next-auth/react"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      Welcome
    </main>
  )
}

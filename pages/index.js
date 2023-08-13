import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { useState, useEffect } from 'react'

export default function Home() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
 
  useEffect(() => {
    fetch('http://localhost:3000/api/auth/session')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])
 
  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>
  const name = data.user.name
  const email = data.user.email
  return (
    <main>
      Welcome {name} and {email}
    </main>
  )
}

"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Home() {

  const route = useRouter()
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    console.log(isLogged)
    isLogged ? route.push('home') : route.push('signIn')
  }, [isLogged])
  

  return (
    <>
      <h1>
        <Link href='/signIn'>Navegue</Link>
      </h1>
    </>
  )
}

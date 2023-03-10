import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Login from './login'
import Admin from './admin'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Admin/>
  )
}

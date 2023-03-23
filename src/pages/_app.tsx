import type { AppProps } from 'next/app'
import '../style.css'
import { Ubuntu_Condensed } from 'next/font/google'




export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

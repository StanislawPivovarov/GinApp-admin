import type { AppProps } from "next/app";
import "../style.css";
import AdminPage from "@/layouts/AdminPage";
import StartPage from "@/layouts/StartPage";
import { ReactElement, ReactNode } from "react";
import type { NextPage } from 'next'
const layouts: any = {
  LA: AdminPage,
  LS: StartPage,
};

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<Component {...pageProps} />)
}


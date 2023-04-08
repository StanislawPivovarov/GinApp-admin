import type { AppProps } from "next/app";
import "../style.css";
import AdminPage from "@/layouts/AdminPage";
import StartPage from "@/layouts/StartPage";
import { ReactElement, ReactNode } from "react";
import type { NextPage } from 'next'

import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/react-hooks";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const client = new ApolloClient({
  uri: `${process.env.ENTRY_POINT}`,
  cache: new InMemoryCache(),
});


export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ApolloProvider client={client}>
        {getLayout(<Component {...pageProps} />)}
    </ApolloProvider>
   
  )
  

}


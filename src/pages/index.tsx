import Head from "next/head";
import Image from "next/image";
import { Ubuntu_Condensed } from "next/font/google";
import Login from "./login";
import { BrowserRouter } from "react-router-dom";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Admin from "./admin";
import Beans from "./beans";
import Statistic from "./statistics";
import AdminPage from "@/layouts/AdminPage";
import StartPage from "@/layouts/StartPage";

const client = new ApolloClient({
  uri: `${process.env.ENTRY_POINT}`,
  cache: new InMemoryCache(),
});

export default function Home() {
  return (
       <AdminPage>
        <Statistic/>
     </AdminPage>

  );
}

import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: `${process.env.HASURA_ENDPOINT as String}`,
    cache: new InMemoryCache(),
    headers: {
        "x-hasura-admin-secret": `${process.env.HASURA_ADMIN_SECRET as String}`
        }
})

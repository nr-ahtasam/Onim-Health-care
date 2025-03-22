"use client"
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "@/apollo/client";

// Create the Apollo client instance
const client = createApolloClient();

export default function ApolloWrapper({ children }) {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

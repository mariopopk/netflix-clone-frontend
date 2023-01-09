import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";

const uri = "http://localhost:1337/graphql";

const client = new ApolloClient({
  uri,
  cache: new InMemoryCache({
    typePolicies: {
      Show: {
        keyFields: ["name"],
      },
    },
  }),
});

interface ProviderProps {
  children: ReactNode;
}

export function Provider({ children }: ProviderProps) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

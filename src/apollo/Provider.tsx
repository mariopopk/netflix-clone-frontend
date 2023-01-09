import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";

const uri = process.env.REACT_APP_GRAPHQL_SERVICE + "/graphql";

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

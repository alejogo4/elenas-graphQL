import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://onboarding-redesign.dev.elenas.la/gql/',
    cache: new InMemoryCache()
});
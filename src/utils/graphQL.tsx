import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import {getData} from './storage';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://onboarding-redesign.dev.elenas.la/gql/',
});

const authLink = setContext(async(_, { headers }) => {

  const token = await getData("token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Token ${token}` : "",
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});


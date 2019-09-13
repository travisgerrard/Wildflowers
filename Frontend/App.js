import React from 'react';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import MyRootComponent from './src/index';
import Navigation from './Navigation';

const devURI = 'http://localhost:4000';
const prodURI =
  'https://api-uswest.graphcms.com/v1/cjlub0zft24jx01gt4c52gxwv/master';

// Create the client as outlined in the setup guide

// Instantiate required constructor fields
const cache = new InMemoryCache();
const link = new HttpLink({
  uri: devURI
});

const client = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  link: link
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Navigation />
    </ApolloProvider>
  );
}

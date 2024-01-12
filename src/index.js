import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const root = createRoot(document.getElementById('root'));

const client = new ApolloClient({
  uri: 'https://impress-2020-box.openneo.net/api/graphql',
  cache: new InMemoryCache(),
});


root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



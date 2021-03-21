import * as React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/client';

import App from "../app";

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql"
});

const rootElement = document.getElementById("root");

render(
    <ApolloProvider client= { client } >
    <App />
< /ApolloProvider>,
    document.getElementById('root')
);
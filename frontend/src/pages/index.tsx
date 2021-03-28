/**
 * Imports
 */
import React from 'react';
import { GET_USERS } from '../graphql';
import Users from "../components/User";
import { IUser } from "../types/User";


// import ApolloClient from 'apollo-boost';
import { ApolloProvider, ApolloClient, InMemoryCache, ApolloConsumer } from '@apollo/client';

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql"
});


const Index = () => {
    return (
        <ApolloProvider client={client}>
        <div>
            <h1>Name change society</h1>
            <Users />
        </div>
        </ApolloProvider>
    )
}
export default Index;
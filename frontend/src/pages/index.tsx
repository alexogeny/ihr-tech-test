/**
 * Imports
 */
import React from 'react';
import { GET_USERS } from '../graphql';
import User from "../components/User";
import { IUser } from "../types/User";
import { useUsersQuery } from '../makeRequest';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql"
});


const Index = () => {
    const { loading, error, data } = useUsersQuery(GET_USERS);
    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Something went wrong.</h1>;
    return (
        <ApolloProvider client={client}><div>
            <h1>Name change society</h1>
            <div>
                {data.getUsers.map((user: IUser) => (
                    <User key={user.id} user={user} />
                ))}
            </div>
        </div></ApolloProvider>
    )
}
export default Index;
import React, { Component } from 'react';
// import ApolloClient from 'apollo-boost';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import "./styles.css";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql"
});

const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <div className="App">
                <h1>Citizens of the Name Change Society</h1>

            </div>
        </ApolloProvider>

    );

};

export default App;
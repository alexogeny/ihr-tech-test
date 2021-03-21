import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import "./styles.css";

const client = new ApolloClient({
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
import React from 'react';
import {render} from 'react-dom';
import App from './components/App.component.jsx';

import {ApolloProvider} from 'react-apollo';
import {ApolloClient} from 'apollo-client';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
    headers:{
        Authorization: 'bearer f23b57e4de5231e24b00a13d2e1400z74550436c'
    }
});

const client = new ApolloClient({
    link:httpLink,
    cache: new InMemoryCache()
});

render(
    <ApolloProvider client = {client}>
        <App />
    </ApolloProvider>,document.getElementById('root'));

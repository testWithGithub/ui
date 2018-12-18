import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Tests from './Tests';
import Layout from './Layout';
//import 'antd/dist/antd.css'; 
import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
const client = new ApolloClient({
  uri: "http://localhost:4000/"
});
ReactDOM.render(
 <ApolloProvider client={client}>
{/* <App /> */}
<Layout/>
</ApolloProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Layout from './components/Layout';
import Main from './components/Main';
//import 'antd/dist/antd.css'; 
import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
const client = new ApolloClient({
  uri: "https://testshub.herokuapp.com/"
});
ReactDOM.render(
 <ApolloProvider client={client}>
{/* <App /> */}
<Main/>
</ApolloProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

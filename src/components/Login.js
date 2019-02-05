import React from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import axios from 'axios';
import {Button } from 'antd';
import * as qs from 'query-string';
import { Redirect } from 'react-router-dom'
//import { browserHistory } from 'react-router';


const Login = props =>{ 
   
    const renderRedirect = () => {
    console.log(props.location)
    console.log(qs.parse(props.location.search).access_token)
    if(qs.parse(props.location.search).access_token){
        const token =qs.parse(props.location.search).access_token
        localStorage.setItem('access_token',token)
        return <Redirect to='/' />
    }
}
    return(

    // eslint-disable-next-line no-undef
        <div>
             {renderRedirect()}
            <Button icon="github" href='./api/login'>Github</Button>
        </div>
)}

export default Login;
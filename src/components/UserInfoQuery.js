import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import UserInfo from './UserInfo';
const USER_DETAILS = gql`
  query UserDetails($atoken: String!) {
    userDetails(token:$atoken) {
                name
                login 
                avatar_url
             }
  }`

const UserInfoQuery =()=>{
    return(
        <Query
          query={USER_DETAILS} variables={{atoken:localStorage.getItem('access_token')||""}}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
                return <UserInfo data={data&&data.userDetails}/>
            }}
            </Query>
)}

export default UserInfoQuery;
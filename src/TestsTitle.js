import React from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { Input,Button,Row, Col } from 'antd';
const ADD_CONMENT = gql`
mutation ($version: String!){
  addComment(version:$version)
}
`;


const TestsTitle = props => (
    // eslint-disable-next-line no-undef
    <Mutation mutation={ADD_CONMENT}  >
    {(addComment) => (
    <Row type="flex" align="top" justify="space-between" style={{ textAlign: 'center' }}>
       <Col>
       <Input addonBefore="version" onChange ={e=>props.onVersionChange(e.target.value)}  />
       </Col>
       <Col>
       <Button type={'primary'} onClick={(event)=>{addComment({ variables: { version:"event"}})}}>Save</Button>
       </Col>
   </Row>
    )}
  </Mutation>
)

export default TestsTitle;
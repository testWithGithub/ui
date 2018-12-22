import React from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import {Radio } from 'antd';
const ADD_CONMENT_WITH_LABEL = gql`
mutation ($id: String!,$result:String!,$version: String!){
  addCommentAndLabel(id:$id,result:$result,version:$version)
}
`;


const TestResult = props => (
    // eslint-disable-next-line no-undef
    <Mutation mutation={ADD_CONMENT_WITH_LABEL}  >
    {(addCommentAndLabel) => (
  <Radio.Group  buttonStyle="solid"  onChange={e=>addCommentAndLabel({ variables: { 
      version:props.record.version,
      result:e.target.value,
      id:props.record.subjectId}})} >
  <Radio.Button  value="Pass">Pass</Radio.Button>
  <Radio.Button value="Fail">Fail</Radio.Button>
  <Radio.Button value="N/A">N/A</Radio.Button>

</Radio.Group>
    )}
  </Mutation>
)

export default TestResult;
import React,{useState } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Table, Divider, Tag,Form,Input,Radio,Button,Row, Col } from 'antd';
import TestsTitle from "./TestsTitle";
import TestsResult from "./TestResult";
const FormItem = Form.Item;
const ButtonGroup = Button.Group;


const Tests = () => {
    const [version, setVersion] = useState("");
    const columns = [{
        title: 'id',
        dataIndex: 'id',
        key: 'id',
        width: '5%',
        render: text => <a href="javascript:;">{text}</a>,
      }, 
      {
        title: 'title',
        dataIndex: 'title',
        key: 'title',
        width: '15%',
      }, 
      {
        title: 'description',
        dataIndex: 'description',
        key: 'description',
        width: '25%',
      },
      {
        title: 'expected results',
        dataIndex: 'expectedResults',
        key: 'expectedResults',
        width: '15%',
      },
      {
        title: 'comment',
        dataIndex: 'comment',
        key: 'comment',
        editable: true,
        width: '25%',
      },
      {
        title: 'results',
        dataIndex: 'results',
        key: 'results',
        width: '20%',
        render: (text, record) => (<span>
       
       <TestsResult record={{...record,version}}  />
            {/* <ButtonGroup>
          <Button style={{ color:"green"}}>Pass</Button>
          <Button style={{ color:"red"}} >Fail</Button>
          <Button style={{ color:"orange"}} >N/A</Button>
        </ButtonGroup> */}
        {/* <Radio.Group  buttonStyle="solid"  onChange={e=>onRadioChange(record,e.target.value)} >
            <Radio.Button  value="a">Pass</Radio.Button>
            <Radio.Button value="b">Fail</Radio.Button>
            <Radio.Button value="c">N/A</Radio.Button>
          
          </Radio.Group> */}
          </span>)
      }
     
      
    ]
    
    return(
  <Query
    query={gql`{
    issues {
        subjectId
        id
        title
        description
        expectedResults
      }
    }`
    }
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
        const components = {
            body: {
            //  cell: EditableCell,
            },
          };
        const columnss = columns.map((col) => {
            if (!col.editable) {
              return col;
            }
           
            return {
              ...col,
              onCell: record => ({
                record,
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
             //   handleSave: this.handleSave,
              }),
            };
          });
      return (
        <Table dataSource={data.issues} columns={columnss} components={components} size="small" title={() =>
             <TestsTitle onVersionChange = {version=>{
                console.log(version);
                setVersion(version)}} />
        } />
      );
    }}
  </Query>
);}
export default Tests;
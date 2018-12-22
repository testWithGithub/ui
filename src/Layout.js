import React from 'react';

import { compose, withState } from 'recompose';
//import logo from '../logo.svg';
import { BackTop, Row, Col, Layout, Menu, Button } from 'antd';
import Tests from './Tests'

const { Header, Sider, Content } = Layout;

let collapsedState = false;
const toggle = () => {
  collapsedState = !collapsedState;
};

const menuSelection = (i, props) => {
  if (i.key === 1) {
    props.onMenuSelected({ visible: true, menuItem: i });
  } else {
    props.onMenuSelected({ visible: false, menuItem: i });
  }
};

const selectTable = (props) => {
  switch (props.isTableVisible.menuItem.key) {
    case '1':
      return <Tests />;
  //  case '2':
    //   return <ContainerTable />;
    // case '3':
    //   return <WorkerTable />;
    // case '4':
    //   return <DriverTable />;
    // case '5':
    //   return <AlgorithmTable />;
    // case '6':
    //   return <DebugTable />;
    default:
    return <Tests />;
  }
};

const LayoutInner = class extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
  //  this.props.init();
  }
  render() {
    const { props } = this;
    return (
      <Layout
        style={{ minHeight: '-webkit-fill-available' }}>
        <Header
          style={{
            background: 'white',
            zIndex: '2 ',
            borderBottom: '1pt solid #ccc'
          }}>
          <Row type="flex" align="top" justify="space-between" style={{ textAlign: 'center', height: "1vh" }}>
            <Col span={2} style={{ marginLeft: '-4.3%' }}>
              {/* <img src={logo} className="App-logo" alt="logo"
                style={{
                  width: '6vh',
                  marginRight: '20px'
                  // height: '-webkit-fill-available'
                }} /> */}
              <span style={{
                margin: 'auto',
                color: '#307fe6',
                fontSize: '30px',
                fontWeight: 'bold',
                fontFamily: 'monospace',
                letterSpacing: '1px',
                position: 'absolute',
                height: '-webkit-fill-available'
              }}>TestHub</span>
            </Col>
            <Col span={12} style={{ height: '-webkit-fill-available' }}>
              {/* <TableAutoComplete /> */}
            </Col>
            <Col span={2} style={{ textAlign: 'center' }}>
              {/* <AddPipe style={{ margin: 'auto' }} /> */}
            </Col>
          </Row>
        </Header>
        <Layout>
          <Sider
            style={{ background: '#ececec' }}
            trigger={null}
            collapsible
            collapsed={collapsedState}>
            <Menu
              style={{ background: '#ececec' }}
              mode="inline"
              onSelect={(i, k, s) => {
                menuSelection(i, props);
              }}
              defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
              <span >
                <span style={{marginRight:"30px"}} className="nav-text">Tests </span>
                <Button  type="primary" style={{margiRight:"20px"}} size="small">load last </Button>
              </span>
              </Menu.Item>
              <Menu.Item key="2">
                <span className="nav-text">Dashboard</span>
              </Menu.Item>
              <Menu.Item key="3">
                <span className="nav-text">Config</span>
              </Menu.Item>

              <span className="ant-divider" />
            </Menu>
          </Sider>
          <Content
            style={{
              // margin: '24px 16px',
              background: '#fff'
            }}>
            <BackTop />
            {selectTable(props)}
          </Content>
        </Layout>
      </Layout>
    );
  }
};


const mapStateToProps = (state) => ({
  scriptsPath: state.serverSelection.currentSelection.scriptsPath
});

export default compose(
  
  withState('isTableVisible', 'onMenuSelected', {
    visible: true,
    menuItem: {}
  }),
  withState('isVodUpVisible', 'onVodUpPopoverClickVisible', false),
  withState('isVodDownVisible', 'onVodDownPopoverClickVisible', false)
)(LayoutInner);

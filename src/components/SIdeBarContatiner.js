import React, { Component } from 'react'
import { withApollo } from 'react-apollo';
import Sidebar from "react-sidebar";
import { throws } from 'assert';
import {SideBarStatus} from '../Queries/query';
class SideBarContainer extends Component {
    constructor(){
        super();
        this.sideBar = null;
        this.handleClickOutside = this.handleClickOutside.bind(this)
        this.setChildRef = this.setChildRef.bind(this)
        this.state = {
            isOpen : false
        };

      }
    componentDidMount() {
       document.addEventListener('mousedown', this.handleClickOutside);
      }

    //   shouldComponentUpdate(nextProps, nextState){
    //       this.setState({isOpen:nextProps.visible})
    //       return true;
    //   }
      handleClickOutside(event) {
        if (this.sidebar&&this.props.visible ) {
            if( !this.sidebar.contains(event.target)){
          //      alert('You clicked outside of me!');
               this.setState({isOpen:true})
                this.props.sideBarClose();
            }
        }
      }
      setChildRef(node) { // receives reference to component as argument
        this.sidebar = node;
      }
    render() {
    //    const data = this.props.client.readQuery({SideBarStatus})
        return (
            <div 
                onBlur={() => console.log("blue")}>
                <Sidebar
                ref={this.setChildRef}
                    sidebar={<div>dfsdf</div>}
                    open={this.state.isOpen}
                    // onSetOpen={this.onSetSidebarOpen}
                    styles={{ sidebar: { background: "white",width:"50vw",height:"100vh",position:"fixed",top:"4EM"} }}
                    pullRight={true}
                >
                
                </Sidebar>
            </div>
        )

    }
}



export default withApollo(SideBarContainer);
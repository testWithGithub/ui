import React from 'react';
import {Avatar} from 'antd';
const UserInfo = (props)=><div>

 <Avatar src={props.data.avatar_url} style={{height:'50px',width:'50px'}}/>
 {/* <span> Hi {props.data.name}</span>   */}
</div>

export default UserInfo;


import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './Layout'
import Login from './Login'
const Main = ()=>  
<div>
<Router>
    <Switch>
      <Route exact={true} path='/' component={Layout} />
      <Route path='/tests' component={Layout} />
      <Route path='/login' component={Login} />
      {/* <Route path='/tasks/:id' component={Task} />
      <Route path='/*' component={NotFound} />
      <Route path='/tasks' component={Tasks} /> */}
    </Switch>
</Router>
</div>


export default Main;
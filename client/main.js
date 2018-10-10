import {Meteor} from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Switch} from 'react-router'
import './main.html'
//Components
import SignUp from './../imports/ui/components/SignUp'
import Login from './../imports/ui/components/Login'
import NotFound from './../imports/ui/components/NotFound'
import LinkComponent from './../imports/ui/components/Link';


//Setup Routes
const routes = (
  <Router>
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/links" component={LinkComponent}/>
      <Route path="*" component={NotFound}/>
    </Switch>
  </Router>
);
Meteor.startup(()=>{
  ReactDOM.render(routes, document.getElementById('app'));
})
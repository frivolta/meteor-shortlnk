import {Meteor} from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {Switch} from 'react-router'
/*import {withRouter} from 'react-router'
import {Tracker} from 'meteor/tracker'
import createBrowserHistory from 'history/createBrowserHistory'*/
import './main.html'
//Components
import SignUp from './../imports/ui/components/SignUp'
import Login from './../imports/ui/components/Login'
import NotFound from './../imports/ui/components/NotFound'
import LinkComponent from './../imports/ui/components/Link';

//Define Auth Pages
/*const browserHistory = createBrowserHistory();
const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];

export const onAuthChange = (isAuthenticated) => {
  const pathname = browserHistory.location.pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if ( isUnauthenticatedPage && isAuthenticated ) {
    browserHistory.replace('/links');
  } else if ( isAuthenticatedPage && !isAuthenticated ) {
    browserHistory.replace('/');
  }
};

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});*/
//Setup Routes
const routes = (
  <Router>
    <Switch>
      <Route exact path="/" render={() => Meteor.userId() ? <Redirect to='/links' /> : <Login />}/>
      <Route exact path="/signup" render={() => Meteor.userId() ? <Redirect to='/links' /> : <SignUp/>}/>
      <Route exact path="/links" render={() => !Meteor.userId() ? <Redirect to='/' /> : <LinkComponent />}/>
      <Route path="*" component={NotFound}/>
    </Switch>
  </Router>
);

Meteor.startup(()=>{
  ReactDOM.render(routes, document.getElementById('app'));
})
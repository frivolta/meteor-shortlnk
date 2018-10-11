import {Meteor} from 'meteor/meteor';
import ReactDOM from 'react-dom';
import {Tracker} from 'meteor/tracker'
import './main.html'
import {routes} from '../imports/routes/routes';
Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
});


Meteor.startup(()=>{
  ReactDOM.render(routes, document.getElementById('app'));
})
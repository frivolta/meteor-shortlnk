import React from 'react';
import { Link } from 'react-router-dom';
import {Meteor} from 'meteor/meteor';
import { Redirect } from 'react-router'


export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      redirectToRef: false
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim()
    Meteor.loginWithPassword({email}, password, (err)=>{
      if(err){
        this.setState({
          ...this.state,
          error:err.reason
      })
      }else{
        this.setState({
          ...this.state,
          error:'',
          redirectToRef:true
      })
      }
    })
    /* e.preventDefault();
     this.setState({
         error: 'Something went wrong'
     })*/
  }

  render() {
    return (
      
      <div>
        {/* Redirect if submit correctly */}
        {this.state.redirectToRef && <Redirect to='/links'/> }
        <h1>Login to Short Lnk</h1>
        {this.state.error && <p>{this.state.error}</p>}
        <form noValidate>
          <input type="email" ref="email" name="email" placeholder="Email" />
          <input type="password" ref="password" name="password" placeholder="Password" />
          <button onClick={this.onSubmit}>Login</button>
        </form>

        <Link to="/signup">
          Don't have an account?
          </Link>
      </div>
    )
  }
}
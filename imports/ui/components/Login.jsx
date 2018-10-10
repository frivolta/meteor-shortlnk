import React from 'react';
import {Link} from 'react-router-dom';

export default class Login extends React.Component{
    handleLogIn=()=>{
        this.props.history.push('/links')
    }
    render(){
    return(
      <div>
          <h1>Login to Short Lnk</h1>
          login form
          <Link to="/signup">
            Don't have an account?
          </Link>
      </div>
    )
  }
}
import React from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

export default class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state={
            error: ''
        }
    }
    onSubmit=(e)=>{
        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim()
        Accounts.createUser({email, password}, (err)=>{
            console.log('Signup callback', err)
        })
       /* e.preventDefault();
        this.setState({
            error: 'Something went wrong'
        })*/
    }
    render() {
        return (
            <div>
                <h1>Join Short Lnk</h1>
                {this.state.error && <p>{this.state.error}</p>}
                <form >
                    <input type="email" ref="email" name="email" placeholder="Email"/>
                    <input type="password" ref="password" name="password" placeholder="Password"/>
                    <button onClick={this.onSubmit}>Create Account</button>
                </form>
                <Link to="/">Already have an account?</Link>
            </div>
        )
    }
}
import React from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';
import { Redirect } from 'react-router'

export default class SignUp extends React.Component {
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
        console.log(email, password)
        Accounts.createUser({ email, password }, (err) => {
            console.log('Signup callback', err)
            this.setState({
                ...this.state,
                redirectToRef:true
            })
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
                {this.state.redirectToRef && <Redirect to='/'/> }
                <h1>Join Short Lnk</h1>
                {this.state.error && <p>{this.state.error}</p>}
                <form >
                    <input type="email" ref="email" name="email" placeholder="Email" />
                    <input type="password" ref="password" name="password" placeholder="Password" />
                    <button onClick={this.onSubmit}>Create Account</button>
                </form>
                <Link to="/">Already have an account?</Link>
            </div>
        )
    }
}
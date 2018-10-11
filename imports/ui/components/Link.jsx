import React from 'react';
import { Redirect } from 'react-router'
import { Accounts } from 'meteor/accounts-base';



export default class LinkComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            redirectToRef: false
        }
    }
    handleLogOut = (e) => {
        e.preventDefault();
        Accounts.logout(()=>{
            this.setState({
                ...this.state,
                error:'',
                redirectToRef:true
            })
        });
        //this.props.history.push('/')
        //require ('meteor/meteor').Meteor.user()
    }
    render() {
        return (
            <div>
                {/* Redirect if submit correctly */}
                {this.state.redirectToRef && <Redirect to='/'/> }
                <p>Link</p>
                <button onClick={this.handleLogOut}>LogOut</button>
            </div>
        )
    }
}
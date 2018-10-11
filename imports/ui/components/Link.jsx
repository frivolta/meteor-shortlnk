import React from 'react';
import { Redirect } from 'react-router'
import { Accounts } from 'meteor/accounts-base';
import { Links } from '../../api/links';
import LinkList from './LinkList';




export default class LinkComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            redirectToRef: false
        }
    }
    onSubmit=(e)=>{
        const url = this.refs.url.value.trim();
        if(url){
            Links.insert({url})
            this.refs.url.value = '';
        }
        e.preventDefault();

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
                <LinkList/>
                <p>Add Link</p>
                <form onSubmit={this.onSubmit}>
                    <input type="text" ref="url" placeholder="URL"/>
                    <button>Add Link</button>
                </form>
            </div>
        )
    }
}
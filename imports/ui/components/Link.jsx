import React from 'react';
import { Redirect } from 'react-router'
import { Accounts } from 'meteor/accounts-base';
import { Links } from '../../api/links';
import LinkList from './LinkList';
import { Meteor } from 'meteor/meteor';
import  PrivateHeader  from './PrivateHeader';
import AddLink from './AddLink';




export default class LinkComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            redirectToRef: false
        }
    }
    
    render() {
        return (
            <div>
                <PrivateHeader title="Links"/>
                <LinkList/>
                <AddLink/>
            </div>
        )
    }
}
import React from 'react';
import { Redirect } from 'react-router'

export default class PrivateHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            redirectToRef: false
        }
    }
    handleLogOut = (e) => {
        e.preventDefault();
        Accounts.logout(() => {
            this.setState({
                ...this.state,
                error: '',
                redirectToRef: true
            })
        });
    }
    render() {
        return (
            <React.Fragment>
                {/* Redirect if submit correctly */}
                {this.state.redirectToRef && <Redirect to='/'/> }
                <p>{this.props.title}</p>
                <button onClick={this.handleLogOut}>LogOut</button>
            </React.Fragment>
        )
    }
}
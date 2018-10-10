import React from 'react';
import { Link } from 'react-router-dom';



export default class LinkComponent extends React.Component {
    handleLogOut = () => {
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <p>Link</p>
                <button onClick={this.handleLogOut}>LogOut</button>
            </div>
        )
    }
}
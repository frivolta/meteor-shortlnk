import React from 'react';
export default class AddLink extends React.Component {
    onSubmit = (e) => {
        const url = this.refs.url.value.trim();
        if (url) {
            Meteor.call('links.insert', url);
            this.refs.url.value = '';
        }
        e.preventDefault();

    }
    render() {

        return (
            <React.Fragment>

                <p>Add Link</p>
                <form onSubmit={this.onSubmit}>
                    <input type="text" ref="url" placeholder="URL" />
                    <button>Add Link</button>
                </form>
            </React.Fragment>
        )
    }
}
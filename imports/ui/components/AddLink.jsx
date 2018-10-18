import React from 'react';

export default class AddLink extends React.Component {
    constructor(props){
        super(props);
        this.state={
            url: ''
        }
    }
    
    onSubmit = (e) => {
        const {url} = this.state;
        if (url) {
            Meteor.call('links.insert', url), (err,res)=>{
                if(!err){
                    this.setState({url:''})
                }
            };
        }
        e.preventDefault();
    }
    onChange = (e)=>{
        this.setState({
            url:e.target.value.trim()
        })
    }
    render() {
        return (
            <React.Fragment>
                <p>Add Link</p>
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="URL" value={this.state.url} onChange={this.onChange}/>
                    <button>Add Link</button>
                </form>
            </React.Fragment>
        )
    }
}
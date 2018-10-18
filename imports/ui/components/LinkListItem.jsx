import React from 'react';
import Clipboard from 'clipboard';
import { Meteor } from 'meteor/meteor';
export default class LinkListItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isCopied: false
        }
    }

    handleHiddenStatus = ()=>{
        Meteor.call('links.setVisibility', this.props._id, !this.props.visible);
    }
    componentDidMount(){
        this.clipboard = new Clipboard(this.refs.copy);
        this.clipboard.on('success', ()=>{
            this.setState({
                ...this.state,
                isCopied:true
            })
            setTimeout(()=>{
                this.setState({
                    ...this.state,
                    isCopied:false
                })
            },300)
        }).on('error', ()=>{
            alert('unable to copy');
        })
    }
    componentWillUnmount(){
        this.clipboard.destroy();
    }
    render(){
        return(
            <div>
                <p>{this.props.url}</p>
                <p>{this.props.shortUrl}</p>
                <p>{this.props.visible.toString()}</p>
                <p>{this.props.visitedCount} - {this.props.lastVisitedAt}</p>
                <button ref="copy" data-clipboard-text={this.props.shortUrl}>{this.state.isCopied ? `Copied` : `Copy`}</button>
                <button onClick={this.handleHiddenStatus}>{this.props.visible ? 'Hide' : 'Unhide'}</button>
                <hr></hr>
            </div>
        )
    }
}
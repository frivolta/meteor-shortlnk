import React from 'react';
import {Meteor} from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Links } from '../../api/links';
import {Session} from 'meteor/session';

import LinkListItem from './LinkListItem';

export default class LinkList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            links: []
        }
    }
    componentDidMount(){
        this.linksTracker = Tracker.autorun(()=>{
            Meteor.subscribe('links');
            const links = Links.find({
                visible:Session.get('showVisible')
            }).fetch();
            this.setState({
                ...this.state,
                links
            })
        })
    }
    componentWillUnmount(){
        this.linksTracker.stop;
    }

    renderLinksListItems = ()=>{
        return(
            this.state.links.map((link)=>{
                const shortUrl = Meteor.absoluteUrl(link._id)
                return <LinkListItem key={link._id} shortUrl={shortUrl} {...link}/>
            })
        )
    }
    render(){
       return(
           <div>
               <p>Links List</p>
               <div>
                   {this.renderLinksListItems()}
               </div>
           </div>
       )
    }
}
import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import shortid from 'shortid';

export const Links = new Mongo.Collection('links');
//Fetch all links submitted by a single user
if(Meteor.isServer){
    Meteor.publish('links', function(){
        return Links.find({userId: this.userId});
    })
}

//resource.action
Meteor.methods({
    'links.insert': function (url) {
        if (!this.userId){
            throw new Meteor.Error('not-authorized');
        }
        //Validate Links
        new SimpleSchema ({
            url:{
            type:String,
            label: 'Your link',
            regEx: SimpleSchema.RegEx.Url
            }
        }).validate({url:url})
        Links.insert({
            _id: shortid.generate(),
            url,
            userId: this.userId
        })
    
    }
})
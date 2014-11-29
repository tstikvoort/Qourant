Meteor.subscribe('slidepics');
Template.slideCam.helpers({
    photos: function(){
        return slidepics.find({}, {sort: {date: -1}}).fetch().splice(0,5);
    }
});
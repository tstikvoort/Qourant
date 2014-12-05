Meteor.subscribe('slidepics');
Template.slideCam.helpers({
    photos: function(){
        return slidepics.find({}, {sort: {dateTime: -1}}).fetch().splice(0,5);
    }
});
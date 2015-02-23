Meteor.subscribe('videos')
Template.video.helpers({
	video: function() {
		return videos.findOne(this._id);
	}
});
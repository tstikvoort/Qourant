galleryComments = new Meteor.Collection('galleryComments');
galleryComments.allow({
	insert: function () {
		return true;
	}
});
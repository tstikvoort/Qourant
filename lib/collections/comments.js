postComments = new Meteor.Collection('postComments');
postComments.allow({
	insert: function(){
		return true;
	},
	remove: function(userId, comment) {
		// var user = Meteor.user();
		if(comment.user_id == userId) return true;
		return false;
	}
});
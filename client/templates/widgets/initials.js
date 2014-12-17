Template.initials.helpers({
	user: function() {
		var user = Meteor.users.findOne({_id: this.user_id});
		return {
			_id: user._id,
			name: user.services.google.given_name + ' ' +user.services.google.family_name,
			imageUrl: user.services.google.picture,
			initials: user.services.google.given_name.charAt(0) + user.services.google.family_name.charAt(0)
		}
	}
});
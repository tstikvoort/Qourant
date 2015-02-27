funTasks = new Meteor.Collection('funTasks');
funTasks.allow({
	update: function(userId, funTask) {
		return userId === funTask.user_id;
	}
});
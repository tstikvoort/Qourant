Template.funTask.helpers({
	funTask: function() {
		Meteor.call('getFuntask', Meteor.user(), function(err, res){
			Session.set('funTask', res);
		});
		return Session.get('funTask');
	}
});
Template.funTask.events({
	"click button": function (event) {
		var funTask = Session.get('funTask');
		if(!funTask.done) {
			funTasks.update(
				{
					_id: funTask._id
				},
				{
					$set: {
						done: true
					}
				}	
			);
			funTask.done = true;
			Session.set('funTask',funTask);
		}	
	}
});
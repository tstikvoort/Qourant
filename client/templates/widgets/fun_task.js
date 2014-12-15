Template.fun_task.helpers({

	user: function () {
		var user = Meteor.user();
		//return user.username;
		return "Tobias";
	}

});

Template.fun_task.events({

	"click button": function (event) {
		console.log( "button clicked" );
	}

});
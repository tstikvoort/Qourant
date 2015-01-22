Meteor.subscribe('groceries');
$('#list020').addClass('act');
Template.groceryTestList.helpers({
	lists: function() {
		return groceries.find();
	}
});
Template.groceryTestList.events({
	'submit form': function(e) {
	    e.preventDefault();
	    var user = Meteor.user();
	    var grocery = {
			user_id: user._id,
			grocerie: $(e.target).find('[id="grocery"]').val(),
		  	createdAt: new Date() // current time
		};
		console.log(grocery);
	    groceries.update({_id: $(e.target).find('[id="_id"]').val()}, {$push: {'groceries': grocery}});
		$(e.target).find('[id="grocery"]').val('');
  	},
	"click #grocery020": function(event) {
		$('.groceries .act').removeClass('act');
		$('#grocery020').addClass('act');
		$('#list020').addClass('act');
	    // $(".groceries .groceryListWrapper").hide();
	    // $(".wrap020").show();
	},
	"click #grocery070": function(event) {
		$('.groceries .act').removeClass('act');
		$('#grocery070').addClass('act');
		$('#list070').addClass('act');
		// $(".groceries .groceryListWrapper").hide();
		// $(".wrap070").show();
	},
	"click #groceryQSA": function(event) {
		$('.groceries .act').removeClass('act');
		$('#groceryQSA').addClass('act');
		$('#listQSA').addClass('act');
		// $(".groceries .groceryListWrapper").hide();
		// $(".wrapQSA").show();
	}
});
Template.comments.helpers({
	length: function(){
		return this.comments.length
	}
});
Template.comments.events({
  'submit form': function(e) {
    e.preventDefault();
    var user = Meteor.user();
    var comment = {
      user_id: user._id,
      initials: user.services.google.given_name.charAt(0) + user.services.google.family_name.charAt(0),
      comment: $(e.target).find('[id="comment"]').val(),
      datetime: new Date()
    };
    if($(e.target).find('[id="type"]').val() == 'gallery'){
    	photoGalleries.update({_id: $(e.target).find('[id="_id"]').val()}, {$push: {'comments': comment}});
    }
    else if ($(e.target).find('[id="type"]').val() == 'knowyourcompany') {
    	knowYourCompany.update({_id: $(e.target).find('[id="_id"]').val()}, {$push: {'comments': comment}});
    }
    $(e.target).find('[id="comment"]').val('');
  }
});
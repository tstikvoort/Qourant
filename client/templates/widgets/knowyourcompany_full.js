Meteor.subscribe('knowYourCompany');
Template.knowyourcompanyFull1.helpers({

	_id: function() {
		var question = knowYourCompany.find().fetch()[0];
    if(question) {
			return question._id;
		}
	},
	question: function(){
		var question = knowYourCompany.find().fetch()[0];
		if(question) {
			return question.question;
		}
	},
  comments: function(){
    var question = knowYourCompany.find().fetch()[0];
    if(question) {
      return question.comments.reverse();
    }
  },
  nrComments1: function() {
    var question = knowYourCompany.find().fetch()[0];
    return question.comments.length;
  }
});
Template.knowyourcompanyFull1.events({
  'submit form': function(e) {
    e.preventDefault();
    var user = Meteor.user();
    var comment = {
      user_id: user._id,
      initials: user.services.google.given_name.charAt(0) + user.services.google.family_name.charAt(0),
      comment: $(e.target).find('[id="comment"]').val(),
      datetime: new Date()
    };
    knowYourCompany.update({_id: $(e.target).find('[id="_id"]').val()}, {$push: {'comments': comment}});
    $(e.target).find('[id="comment"]').val('');
  }
});
Template.knowyourcompanyFull2.helpers({
	_id: function() {
		var question = knowYourCompany.find().fetch()[1];
		if(question) {
			return question._id;
		}
	},
	question: function(){
		var question = knowYourCompany.find().fetch()[1];
		if(question) {
			return question.question;
		}
	},
  comments: function(){
      var question = knowYourCompany.find().fetch()[1];
      if(question) {
          return question.comments;
      }
  },
  nrComments2: function() {
    var question = knowYourCompany.find().fetch()[1];
    return question.comments.length;
  }
});
Template.knowyourcompanyFull2.events({
  'submit form': function(e) {
    e.preventDefault();
    var user = Meteor.user();
    var comment = {
      user_id: user._id,
      initials: user.services.google.given_name.charAt(0) + user.services.google.family_name.charAt(0),
      comment: $(e.target).find('[id="comment"]').val(),
      datetime: new Date()
    };
    knowYourCompany.update({_id: $(e.target).find('[id="_id"]').val()}, {$push: {'comments': comment}});
    $(e.target).find('[id="comment"]').val('');
  }
});
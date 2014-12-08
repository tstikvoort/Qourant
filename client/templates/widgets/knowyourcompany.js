Meteor.subscribe('knowYourCompany');
Template.knowyourcompany1.helpers({
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
            return question.comments;
        }
    }
});
Template.knowyourcompany1.events({
  'submit form': function(e) {
    e.preventDefault();
    var comment = {
      comment: $(e.target).find('[id="comment"]').val(),
      datetime: new Date()
    };
    knowYourCompany.update({_id: $(e.target).find('[id="_id"]').val()}, {$push: {'comments': comment}});
    $(e.target).find('[id="comment"]').val('');
  }
});
Template.knowyourcompany2.helpers({
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
    }
});
Template.knowyourcompany2.events({
  'submit form': function(e) {
    e.preventDefault();
    var comment = {
      comment: $(e.target).find('[id="comment"]').val(),
      datetime: new Date()
    };
    knowYourCompany.update({_id: $(e.target).find('[id="_id"]').val()}, {$push: {'comments': comment}});
    $(e.target).find('[id="comment"]').val('');
  }
});
Meteor.subscribe('searchResults');

Template.searchResults.helpers({

	searchResults: function () {
    	 return searchResults.find();
  	}

});
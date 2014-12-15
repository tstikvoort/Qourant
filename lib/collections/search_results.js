searchResults = new Meteor.Collection('searchResults');
searchResults.allow({

   insert: function () { return true; },
   update: function () { return true; },
   remove: function () { return true; } 
});

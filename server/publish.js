Meteor.publish('slidepics', function(){
  	return slidepics.find();
});
Meteor.publish('photoGalleries', function(){
  	return photoGalleries.find();
});
Meteor.publish('knowYourCompany', function(){
  	return knowYourCompany.find();
});
Meteor.publish("tasks020", function() {
   	return Tasks020.find();
});
Meteor.publish("tasks070", function() {
   	return Tasks070.find();
});
Meteor.publish("tasksSF", function() {
   	return TasksSF.find();
});
Meteor.publish("searchResults", function() {
   	return searchResults.find();
});
Meteor.publish("userData", function () {
    return Meteor.users.find();
});
Meteor.publish("users", function () {
  return Meteor.users.find({_id: this.userId},
    {fields: {'services': 1}});
});
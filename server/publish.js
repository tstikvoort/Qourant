Meteor.publish('slidepics', function(){
  	return slidepics.find();
});
Meteor.publish('photoGalleries', function(){
  	return photoGalleries.find();
});
Meteor.publish('knowYourCompany', function(){
  	return knowYourCompany.find();
});
Meteor.publish("groceries020", function() {
   	return groceries020.find();
});
Meteor.publish("groceries070", function() {
   	return groceries070.find();
});
Meteor.publish("groceriesQSA", function() {
   	return groceriesQSA.find();
});
Meteor.publish("searchResults", function() {
   	return searchResults.find();
});
Meteor.publish("whosIn", function() {
    return whosIn.find();
});
Meteor.publish("userData", function () {
    return Meteor.users.find();
});
Meteor.publish("users", function () {
  return Meteor.users.find({_id: this.userId},
    {fields: {'services': 1}});
});
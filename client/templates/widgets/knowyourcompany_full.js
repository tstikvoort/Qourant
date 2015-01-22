Meteor.subscribe('knowYourCompany');
Template.knowyourcompanyFull.helpers({
  length: function(){
    console.log(this)
  }
});
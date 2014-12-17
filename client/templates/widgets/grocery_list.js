Meteor.subscribe('groceries020');
Meteor.subscribe('groceries070');
Meteor.subscribe('groceriesQSA');
// This code only runs on the client
Template.grocery_list.helpers({
  groceries020: function () {
    return groceries020.find({}, {sort: {createdAt: -1}, limit: 2});
  },
  groceries070: function () {
    return groceries070.find({}, {sort: {createdAt: -1}, limit: 2});
  },
  groceriesQSA: function () {
    return groceriesQSA.find({}, {sort: {createdAt: -1}, limit: 2});
  },
  nrItems020: function () {
    return groceries020.find().count();
  },
  nrItems070: function () {
    return groceries070.find().count();
  },
  nrItemsQSA: function () {
    return groceriesQSA.find().count();
  }
});

Template.grocery_list.events({
  "submit .new-grocery020": function (event) {
    // This function is called when the new task form is submitted
    var text = event.target.text.value;
    groceries020.insert({
      text: text,
      createdAt: new Date() // current time
    });
    // Clear form
    event.target.text.value = "";
    // Prevent default form submit
    return false;
  },
  "submit .new-grocery070": function (event) {
    // This function is called when the new task form is submitted
    var text = event.target.text.value;
    groceries070.insert({
      text: text,
      createdAt: new Date() // current time
    });
    // Clear form
    event.target.text.value = "";
    // Prevent default form submit
    return false;
  },
  "submit .new-groceryQSA": function (event) {
    // This function is called when the new task form is submitted
    var text = event.target.text.value;
    groceriesQSA.insert({
      text: text,
      createdAt: new Date() // current time
    });
    // Clear form
    event.target.text.value = "";
    // Prevent default form submit
    return false;
  },
  "click #open020": function(event) {
    $(".groceries .groceryListWrapper").hide();
    $(".wrap020").show();
  },
  "click #open070": function(event) {
    $(".groceries .groceryListWrapper").hide();
    $(".wrap070").show();
  },
  "click #openQSA": function(event) {
    $(".groceries .groceryListWrapper").hide();
    $(".wrapQSA").show();
  }

});

Meteor.subscribe('tasks020');
Meteor.subscribe('tasks070');
Meteor.subscribe('tasksSF');
// This code only runs on the client
Template.grocery_list.helpers({
  tasks020: function () {
    return Tasks020.find({}, {sort: {createdAt: -1}, limit: 3});
  },
  tasks070: function () {
    return Tasks070.find({}, {sort: {createdAt: -1}, limit: 3});
  },
  tasksSF: function () {
    return TasksSF.find({}, {sort: {createdAt: -1}, limit: 3});
  }
});

Template.grocery_list.events({
  "submit .new-task020": function (event) {
    // This function is called when the new task form is submitted
    var text = event.target.text.value;
    Tasks020.insert({
      text: text,
      createdAt: new Date() // current time
    });
    // Clear form
    event.target.text.value = "";
    // Prevent default form submit
    return false;
  },
  "submit .new-task070": function (event) {
    // This function is called when the new task form is submitted
    var text = event.target.text.value;
    Tasks070.insert({
      text: text,
      createdAt: new Date() // current time
    });
    // Clear form
    event.target.text.value = "";
    // Prevent default form submit
    return false;
  },
  "submit .new-taskSF": function (event) {
    // This function is called when the new task form is submitted
    var text = event.target.text.value;
    TasksSF.insert({
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
  "click #openSF": function(event) {
    $(".groceries .groceryListWrapper").hide();
    $(".wrapSF").show();
  }

});

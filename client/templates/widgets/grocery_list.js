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
        event.preventDefault();
        var text = event.target.text.value;
        if(text != '') {
            groceries020.insert({
                text: text,
                createdAt: new Date()
            });
            event.target.text.value = "";
        }
    },
    "submit .new-grocery070": function (event) {
        event.preventDefault();
        var text = event.target.text.value;
        if(text != '') {
            groceries070.insert({
              text: text,
              createdAt: new Date()
            });
            event.target.text.value = "";
        }
    },
    "submit .new-groceryQSA": function (event) {
        event.preventDefault();
        var text = event.target.text.value;
        if(text != '') {
            groceriesQSA.insert({
              text: text,
              createdAt: new Date()
            });
            event.target.text.value = "";
        }
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
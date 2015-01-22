Meteor.subscribe('groceries020');
Meteor.subscribe('groceries070');
Meteor.subscribe('groceriesQSA');
Template.groceryListFull.helpers({
    groceries020: function () {
        return groceries020.find();
    },
    groceries070: function () {
        return groceries070.find();
    },
    groceriesQSA: function () {
        return groceriesQSA.find();
    }
});
Template.groceryListFull.events({
    "submit .new-grocery020": function (event) {
        var text = event.target.text.value;
        groceries020.insert({
            text: text,
            createdAt: new Date()
        });
        event.target.text.value = "";
        return false;
    },
    "submit .new-grocery070": function (event) {
        var text = event.target.text.value;
        groceries070.insert({
        text: text,
            createdAt: new Date()
        });
        event.target.text.value = "";
        return false;
    },
    "submit .new-groceryQSA": function (event) {
        var text = event.target.text.value;
        groceriesQSA.insert({
            text: text,
            createdAt: new Date()
        });
    event.target.text.value = "";
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

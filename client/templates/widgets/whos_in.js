Meteor.subscribe('whosIn');
Template.whos_in.helpers({
    whosIn_020: function() {
        return whosIn.find({ presence: 'q020' });
    },
    whosIn_070: function() {
        return whosIn.find({ presence: 'q070' });
    }
});
Template.whos_in.events({
    "click #flip_in_020": function(event) {
        $('.whos_in .act').removeClass('act');
        $('#flip_in_020').addClass('act');
        $('#whos_in_020').addClass('act');
    },
    "click #flip_in_070": function(event) {
        $('.whos_in .act').removeClass('act');
        $('#flip_in_070').addClass('act');
        $('#whos_in_070').addClass('act');
    },
    "click #flip_in_QSA": function(event) {
        $('.whos_in .act').removeClass('act');
        $('#flip_in_QSA').addClass('act');
        $('#whos_in_QSA').addClass('act');
    }
});
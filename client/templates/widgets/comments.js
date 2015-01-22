Template.comments.helpers({
    isOwner: function() {
        var user = Meteor.user();
        var comment = postComments.findOne(this._id);
        if(comment.user_id == user._id) return true;
        false;
    }
});
Template.comments.events({
    'submit form': function(e) {
        e.preventDefault();
        if($(e.target).find('[id="comment"]').val() != '') {
            var user = Meteor.user();
            var comment = {
                user_id: user._id,
                post_id: $(e.target).find('[id="_id"]').val(),
                name: user.profile.name,
                avatar: user.services.google.picture,
                comment: $(e.target).find('[id="comment"]').val(),
                type: $(e.target).find('[id="type"]').val(),
                datetime: new Date()
            };
            postComments.insert(comment);
            $(e.target).find('[id="comment"]').val('');
        }
    },
    "click .delete": function () {
        var comment = postComments.findOne(this._id);
        var user = Meteor.user();
        console.log(comment.user_id == user._id);
        if(comment.user_id == user._id) postComments.remove(this._id);
    }
});
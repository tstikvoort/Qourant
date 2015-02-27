Template.knowYourCompany.helpers({
	knowYourCompany: function() {
        return knowYourCompany.findOne(this._id);
    },
    allComments: function(){
        return postComments.find({post_id: this._id}).fetch().reverse().splice(0,3).reverse();
    }
});
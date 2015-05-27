$('.fancybox').fancybox();
Template.photoGallery.helpers({
	gallery: function() {
		return photoGalleries.findOne(this._id);
	},
    allComments: function () {
    	if(this.full) {
    		return postComments.find({post_id: this._id}).fetch()
    	} 
        return postComments.find({post_id: this._id}).fetch().reverse().splice(0,3).reverse();
    }
});
Meteor.subscribe('photoGalleries');
$('.fancybox').fancybox();
Template.photoGallerie1.helpers({
	_id: function() {
		var gallery = photoGalleries.findOne({_id: 'E6WzX2BPZERhF6dQ6'});
		if(gallery) {
			return gallery._id;
		}
	},
	title: function(){
		var gallery = photoGalleries.findOne({_id: 'E6WzX2BPZERhF6dQ6'});
		if(gallery) {
			return gallery.title;
		}
	},
    photos: function(){
        var gallery = photoGalleries.findOne({_id: 'E6WzX2BPZERhF6dQ6'});
        if(gallery) {
            return gallery.photos;
        }
    },
    comments: function(){
        var gallery = photoGalleries.findOne({_id: 'E6WzX2BPZERhF6dQ6'});
        if(gallery) {
            return gallery.comments;
        }
    }
});
Template.photoGallerie1.events({
  'submit form': function(e) {
    e.preventDefault();

    var comment = {
      comment: $(e.target).find('[id="comment"]').val(),
      datetime: new Date()
    };
    photoGalleries.update({_id: $(e.target).find('[id="_id"]').val()}, {$push: {'comments': comment}});
    $(e.target).find('[id="comment"]').val('');
  }
});
Template.photoGallerie2.helpers({
	_id: function() {
		var gallery = photoGalleries.findOne({_id: 'J3tQjxRi84uZ8TvhY'});
		if(gallery) {
			return gallery._id;
		}
	},
	title: function(){
		var gallery = photoGalleries.findOne({_id: 'J3tQjxRi84uZ8TvhY'});
		if(gallery) {
			return gallery.title;
		}
	},
    photos: function(){
        var gallery = photoGalleries.findOne({_id: 'J3tQjxRi84uZ8TvhY'});
        if(gallery) {
            return gallery.photos;
        }
    },
    comments: function(){
        var gallery = photoGalleries.findOne({_id: 'J3tQjxRi84uZ8TvhY'});
        if(gallery) {
            return gallery.comments;
        }
    }
});
Template.photoGallerie2.events({
  'submit form': function(e) {
    e.preventDefault();

    var comment = {
      comment: $(e.target).find('[id="comment"]').val(),
      datetime: new Date()
    };
    photoGalleries.update({_id: $(e.target).find('[id="_id"]').val()}, {$push: {'comments': comment}});
    $(e.target).find('[id="comment"]').val('');
  }
});
Meteor.subscribe('photoGalleries');
Meteor.subscribe('galleryPhotos');
Meteor.subscribe('galleryComments');
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
        return galleryPhotos.find({gallery_id: 'E6WzX2BPZERhF6dQ6'}).fetch();
    },
    comments: function(){
        return galleryComments.find({gallery_id: 'E6WzX2BPZERhF6dQ6'}).fetch();
    }
});
Template.photoGallerie1.events({
  'submit form': function(e) {
    e.preventDefault();

    var comment = {
      comment: $(e.target).find('[id="comment"]').val(),
      gallery_id: $(e.target).find('[id="_id"]').val(),
      datetime: new Date()
    };
    galleryComments.insert(comment);
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
        return galleryPhotos.find({gallery_id: 'J3tQjxRi84uZ8TvhY'}).fetch();
    },
    comments: function(){
        return galleryComments.find({gallery_id: 'J3tQjxRi84uZ8TvhY'}).fetch();
    }
});
Template.photoGallerie2.events({
  'submit form': function(e) {
    e.preventDefault();

    var comment = {
      comment: $(e.target).find('[id="comment"]').val(),
      gallery_id: $(e.target).find('[id="_id"]').val(),
      datetime: new Date()
    };
    galleryComments.insert(comment);
    $(e.target).find('[id="comment"]').val('');
  }
});
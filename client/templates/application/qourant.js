Template.qourant.helpers({
	photoGallery1: function() {
		return { 
			gallery: function() {
				var gallery = photoGalleries.findOne({_id: 'E6WzX2BPZERhF6dQ6'});
				return {
					_id: gallery._id,
					title: gallery.title,
					photos: gallery.photos,
					comments: {type: 'gallery', item_id: gallery._id, comments: gallery.comments.reverse().splice(0,3).reverse()}
				}
			}
		}
  	},
  	photoGallery2: function() {
		return { 
			gallery: function() {
				var gallery = photoGalleries.findOne({_id: 'J3tQjxRi84uZ8TvhY'});
				return {
					_id: gallery._id,
					title: gallery.title,
					photos: gallery.photos,
					comments: {type: 'gallery', item_id: gallery._id, comments: gallery.comments.reverse().splice(0,3).reverse()}
				}
			}
		}
  	},
  	knowyourcompany1: function() {
  		return {
  			knowyourcompany: function(){
  				var question = knowYourCompany.find().fetch()[0];
  				return {
  					_id:question._id,
  					question: question.question,
  					comments: {type: 'knowyourcompany', item_id: question._id, comments: question.comments.reverse().splice(0,3).reverse()},
  				}
  			}
  		}
  	},
  	knowyourcompany2: function() {
  		return {
  			knowyourcompany: function(){
  				var question = knowYourCompany.find().fetch()[1];
  				return {
  					_id:question._id,
  					question: question.question,
  					comments: {type: 'knowyourcompany', item_id: question._id, comments: question.comments.reverse().splice(0,3).reverse()},
  				}
  			}
  		}
  	},
})
Meteor.subscribe("postComments");
Template.qourant.helpers({
	photoGallery1: function() {
		return { 
			gallery: function() {
				var gallery = photoGalleries.find().fetch()[0];
        if (gallery) {
          var comments = postComments.find({post_id: gallery._id, type: 'gallery'}).fetch();
          return {
            _id: gallery._id,
            title: gallery.title,
            photos: gallery.photos,
            length: comments.length,
            comments: {type: 'gallery', item_id: gallery._id, comments: comments.reverse().splice(0,3).reverse()}
          }
        }
			}
		}
  },
	photoGallery2: function() {
		return { 
			gallery: function() {
				var gallery = photoGalleries.find().fetch()[1];
        if(gallery) {
          var comments = postComments.find({post_id: gallery._id, type: 'gallery'}).fetch();
          return {
            _id: gallery._id,
            title: gallery.title,
            photos: gallery.photos,
            length: comments.length,
            comments: {type: 'gallery', item_id: gallery._id, comments: comments.reverse().splice(0,3).reverse()}
          }
        }
			}
		}
	},
	knowyourcompany1: function() {
		return {
			knowyourcompany: function(){
				var question = knowYourCompany.find().fetch()[0];
				if (question) {
          var comments = postComments.find({post_id: question._id, type: 'knowyourcompany'}).fetch();
          return {
            _id:question._id,
            question: question.question,
            length: comments.length,
            comments: {type: 'knowyourcompany', item_id: question._id, comments: comments.reverse().splice(0,3).reverse()},
          }
        }
			}
		}
	},
	knowyourcompany2: function() {
		return {
			knowyourcompany: function(){
				var question = knowYourCompany.find().fetch()[1];
        if (question) {
          var comments = postComments.find({post_id: question._id, type: 'knowyourcompany'}).fetch();
  				return {
  					_id:question._id,
  					question: question.question,
            length: comments.length,
  					comments: {type: 'knowyourcompany', item_id: question._id, comments: comments.reverse().splice(0,3).reverse()},
  				}
        }
			}
		}
	},
  wootcamp2014: function() {
    return {
      title: 'wootcamp',
      url: '//www.youtube.com/embed/rZhBVOsSrK8?rel=0'
    }
  },
  codeuur: function() {
    return {
      title: 'codeuur',
      url: '//www.youtube.com/embed/ZOGv2YWaBj8?rel=0'
    }
  },
  qUitje2014: function() {
    return {
      title: 'Quitje',
      url: '//www.youtube.com/embed/NteveGAvtwM?rel=0'
    }
  }
});
Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.route('/', {name: 'qourant'});
Router.route('/search-results', {name: 'searchResults'});
Router.route('/groceries', {name: 'groceryTestList'});
Router.route('/geenQ', {name: 'getOut'});
Router.route( '/know-your-company/:_id', function() {
	var question = knowYourCompany.findOne({_id: this.params._id});
	question = {
		_id: question._id,
		comments: {type: 'knowyourcompany', item_id: question._id, comments: postComments.find({post_id: question._id, type: 'knowyourcompany'}).fetch()},
		question: question.question
	};
	this.render('knowyourcompanyFull',{
		data: question
	});
});
Router.route( '/gallery/:_id', function(){
	var gallery = photoGalleries.findOne({_id: this.params._id});
	gallery = {
		_id: gallery._id,
		title: gallery.title,
		photos: gallery.photos,
		comments: {type: 'gallery', item_id: gallery._id, comments: postComments.find({post_id: gallery._id, type: 'gallery'}).fetch()}
	};
	this.render('galleryFull',{
		data: gallery
	});
});
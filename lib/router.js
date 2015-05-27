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
	this.render('knowYourCompany',{
		data: {
			_id: this.params._id,
			full: true
		}
	});
});
Router.route( '/gallery/:_id', function(){
	this.render('photoGallery',{
		data: {
			_id: this.params._id,
			full: true
		}
	});
});
Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.route('/', {name: 'qourant'});
Router.route('/search-results', {name: 'searchResults'});
Router.route('/groceries', {name: 'groceryListFull'});
Router.route('/geenQ', {name: 'getOut'});
Router.route( '/know-your-company-1', { name: 'knowyourcompanyFull1' });
Router.route( '/know-your-company-2', { name: 'knowyourcompanyFull2' });
// Router.route( '/gallery-1', { name: 'galleryFull1' });
// Router.route( '/gallery-2', { name: 'galleryFull2' });
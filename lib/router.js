Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.route('/', {name: 'qourant'});
Router.route('/search-results', {name: 'searchResults'});
Router.route('/groceries', {name: 'groceryListFull'});
Router.route('/geenQ', {name: 'getOut'});
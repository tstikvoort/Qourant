Router.configure({
	layouttemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.route('/', {name: 'qourant'});
Router.route('/search-results', {name: 'searchResults'});
Router.route('/groceries', {name: 'groceryListFull'});
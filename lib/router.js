Router.configure({
	layouttemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.route('/', {name: 'qourant'});
Router.route('/geenQ', {name: 'getOut'});
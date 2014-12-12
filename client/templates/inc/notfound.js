Template.notFound.helpers({
	src: function(){
		var number = Math.floor(Math.random() * 6) +1;
		return '/gifs/notfound' + number + '.gif';
	}
});
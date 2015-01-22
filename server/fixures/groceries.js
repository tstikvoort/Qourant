if (groceries.find().count() === 0) {
	groceries.insert({
		title: '020',
		active: true
	});
	groceries.insert({
		title: '070'
	});
	groceries.insert({
		title: 'QSA'
	});
}
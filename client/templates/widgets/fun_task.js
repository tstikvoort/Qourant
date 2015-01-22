Template.fun_task.events({
	"click button": function (event) {
		$(event.currentTarget)
			.addClass('done')
			.text('Well done!');
	}
});
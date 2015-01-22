Meteor.subscribe("users");
Template.header.helpers({
	editionDate: function() {
		d = new Date(new Date());
		var day = d.getDay(),
			diff = d.getDate() - day + (day == 0 ? -6:1);
		day = new Date(d.setDate(diff));
		var dd = day.getDate();
		var mm = day.getMonth()+1;

		var yyyy = day.getFullYear();
		if(dd<10){
			dd='0'+dd;
		}
		if(mm<10){
			mm='0'+mm;
		}
		var today = dd+'/'+mm+'/'+yyyy;
		return today;
	}
});
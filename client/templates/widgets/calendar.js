Meteor.subscribe("calendar");
Template.calendar.helpers({
	events: function() {
		var events = calendar.find().fetch();
		events.sort(function(a,b){
			return new Date(b.start.dateTime) - new Date(a.start.dateTime);
		});
		events.reverse();
		events.forEach(function(event){
			var date = new Date(event.start.dateTime);
			var monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
			var day = "" + date.getDate(); if (day.length == 1) { day = "0" + day; }
			var month = monthNames[date.getMonth()];
			var hour = "" + date.getHours(); if (hour.length == 1) { hour = "0" + hour; };
			var minute = "" + date.getMinutes(); if (minute.length == 1) { minute = "0" + minute; };
			event.startTime = hour + ':' + minute;
			event.day = day;
			event.month = month;
		});
		return events;
    }
});
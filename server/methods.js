Meteor.methods({
    getSlidePic: function() {
        var glijbaanUrl = 'http://q42glijbaan.azurewebsites.net/api/PhotoInfo/Latest?max=5';
        return Meteor.http.get(glijbaanUrl);
    },
    getUser: function(user_id) {
    	console.log(user_id);
        var user = Meteor.users.findOne({_id: user_id});
        return user;
    },
    removeAllSearchResults: function(){
    	searchResults.remove({});
    },
    getCalendar: function() {
        var calenderUrl = 'https://www.googleapis.com/calendar/v3/calendars/nj4eaego2fbiev706daett2r34/events';
        return Meteor.http.get(calenderUrl);
    }
});

Meteor.methods({
    getSlidePic: function() {
        // this.unblock();
        glijbaanUrl = 'http://q42glijbaan.azurewebsites.net/api/PhotoInfo/Latest?max=5';
        return Meteor.http.get(glijbaanUrl);
    },

    removeAllSearchResults: function(){
    	searchResults.remove({});
    }
});

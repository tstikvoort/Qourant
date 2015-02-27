Meteor.methods({
    getSlidePic: function() {
        var glijbaanUrl = 'http://q42glijbaan.azurewebsites.net/api/PhotoInfo/Latest?max=5';
        return Meteor.http.get(glijbaanUrl);
    },
    removeAllSearchResults: function(){
        searchResults.remove({});
    },
    getCalendar: function() {
        var calenderUrl = 'https://www.googleapis.com/calendar/v3/calendars/nj4eaego2fbiev706daett2r34/events';
        return Meteor.http.get(calenderUrl);
    },
    getFuntask: function(user){
        var funTask =   funTasks.findOne({user_id: user._id});
        var today   =   new Date();
        if(typeof(funTask) != 'object') {
            var targets = Meteor.users.find().fetch();
            targets = targets.filter(function(obj){
                return obj._id != user._id;
            });
            if(targets.length > 0) {
                var target  = targets[Math.floor(Math.random()*targets.length)];
                var tasks = [
                    'give ' + target.profile.given_name + ' a hug',
                    'give ' + target.profile.given_name + ' a drink',
                    'give ' + target.profile.given_name + ' a cookie',
                ];
                var funTask = {
                    user_id: user._id,
                    task: tasks[Math.floor(Math.random()*tasks.length)],
                    target_id: target._id,
                    date: new Date()
                };
                funTasks.insert(funTask);
                return funTask;
            } else {
                return {
                    task: 'Er zijn geen andere gebruikers' 
                }
            }
            
        } else if (funTask.date.toDateString() != today.toDateString()) {
            funTask.remove({user_id: user._id});
            var targets = Meteor.users.find().fetch();
            var target  = targets[Math.floor(Math.random()*targets.length)];
            var tasks = [
                'give ' + target.profile.given_name + ' a hug',
                'give ' + target.profile.given_name + ' a drink',
                'give ' + target.profile.given_name + ' a cookie',
            ];
            var funTask = {
                user_id: user._id,
                task: tasks[Math.floor(Math.random()*tasks.length)],
                target_id: target._id
            };
            funTasks.insert(funTask);
            return funTask;
        } else {
            return funTask;
        }
    }
});

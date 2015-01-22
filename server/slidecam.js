setTimeout(
Meteor.call('getSlidePic', function(e,r){
	if(!e){
		data = JSON.parse(r.content);
		for (var i = 0; i < data.length; i++) {			
			if(!slidepics.findOne(data[i])) {
				slidepics.insert(data[i]);
			}
		};
	}
}), 
36000);
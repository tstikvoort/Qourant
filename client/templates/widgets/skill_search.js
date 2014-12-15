Meteor.subscribe('searchResults');

Template.skill_search.events({

	"submit #skill_search_form": function (event) {

		var skillDB = [
				{
					'name': 'Tobias',
					'lastname': 'Stikvoort',
					'main_location': 'Amsterdam',
					'job': 'developer',
					'skills': [ 'html5','css3','javascript','jquery', 'php', 'msql', 'meteor']
				},
				{
					'name': 'Mathijs',
					'lastname': 'Kadijk',
					'job': 'Software Engineer',
					'skills': ['Javascript', 'html5', 'css3', 'meteor', 'ASP.NET', 'C#', 'jQuery']
				},
				{
					'name': 'Johan',
					'lastname': 'Huijkman',
					'job': ['Interaction Engineer', 'Software Engineer'],
					'skills': ['Prototyping', 'interaction', 'interactionexpert', 'html5', 'css3']
				},
			
				{
					'name': 'Thomas',
					'lastname': 'Harkema',
					'job': 'Software Engineer',
					'skills': ['Javascript', 'html5', 'css3', 'meteor', 'objective-c', 'C#']
				},
				{
					'name': 'Raul',
					'lastname': 'Choudhury',
					'job': ['Software Engineer', 'roadie'],
					'skills': ['Javascript', 'html5', 'css3', 'meteor', 'mongoDB', 'MySQL', 'QSA', 'meteor']
				},
				{
					'name': 'Laurens',
					'lastname': 'van den Oever',
					'job': ['Projectleider', 'Software Engineer'],
					'skills': ['Javascript', 'HTML5', 'css3', 'meteor', 'ASP.NET', 'C++', 'Python', 'Haskell']
				}
		];

		Meteor.call('removeAllSearchResults')
		

		var text = event.target.text.value;

		for( i = 0; i < skillDB.length; i++ ){

			var skills = skillDB[i].skills;
			if (  jQuery.inArray( text , skills ) > -1 ) {
		
				   searchResults.insert({
			      	name: skillDB[i].name,
			      	lastname: skillDB[i].lastname,
			      	skills: skillDB[i].skills,
			      	createdAt: new Date() // current time
					});
			}

		}


		// Clear form
	   event.target.text.value = "";
	   Router.go('/search-results');
	   // Prevent default form submit
	   return false;
	 
	}

});


		




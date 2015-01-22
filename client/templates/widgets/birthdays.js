persons = [{"name":"Kars Veling","birthday":"17-11-1974"},{"name":"Jaap Taal","birthday":"18-11-1983"},{"name":"Taco Ekkel","birthday":"21-11-1975"},{"name":"Tim Logtenberg","birthday":"03-12-1982"},{"name":"Chris Waalberg","birthday":"16-12-1978"},{"name":"Mathijs Kadijk","birthday":"20-12-1986"},{"name":"Gerard Dorst","birthday":"22-12-1985"},{"name":"Arjen van der Ende","birthday":"06-01-1982"},{"name":"Jasper Haggenburg","birthday":"23-01-1986"},{"name":"Johan Huijkman","birthday":"27-01-1971"},{"name":"Elaine Oliver","birthday":"05-02-1972"},{"name":"Tomas Harkema","birthday":"07-02-1994"},{"name":"Roelf-Jan de Vries","birthday":"17-02-1987"},{"name":"Mark van Straten","birthday":"18-02-1984"},{"name":"Jeroen Gijsman","birthday":"19-02-1987"},{"name":"Ted de Koning","birthday":"19-02-1988"},{"name":"Rob Lokhorst","birthday":"26-02-1990"},{"name":"Jasper Kaizer","birthday":"03-03-1975"},{"name":"Christiaan Hees","birthday":"08-03-1982"},{"name":"Sander de Vos","birthday":"28-03-1979"},{"name":"Coen Bijpost","birthday":"29-03-1982"},{"name":"Tim van Deursen","birthday":"01-04-1980"},{"name":"Rahul Choudhury","birthday":"03-04-1982"},{"name":"Jaap Mengers","birthday":"13-04-1987"},{"name":"Lukas van Driel","birthday":"29-04-1982"},{"name":"Michiel Post","birthday":"12-05-1983"},{"name":"Tim van Steenis","birthday":"18-05-1987"},{"name":"Marcel Duin","birthday":"05-06-1982"},{"name":"Bas Warmerdam","birthday":"24-06-1982"},{"name":"Cynthia Wijntje","birthday":"25-06-1977"},{"name":"Kamil Afsar","birthday":"28-06-1984"},{"name":"Sjoerd Visscher","birthday":"01-07-1977"},{"name":"Arian van Gend","birthday":"02-07-1982"},{"name":"Martin Kool","birthday":"08-07-1978"},{"name":"Erik van der Veen","birthday":"09-07-1990"},{"name":"Katja Hollaar","birthday":"14-07-1980"},{"name":"Korjan van Wieringen","birthday":"15-08-1980"},{"name":"Frank van den Hoogen","birthday":"16-08-1984"},{"name":"Stef Brooijmans","birthday":"20-08-1971"},{"name":"Remco Veldkamp","birthday":"27-08-1977"},{"name":"Guus Goossens","birthday":"01-09-1988"},{"name":"Leonard Punt","birthday":"06-09-1991"},{"name":"Guido Bouman","birthday":"26-09-1989"},{"name":"Benjamin de Jager","birthday":"28-09-1989"},{"name":"Tom Lokhorst","birthday":"04-10-1985"},{"name":"Suzanne Waalberg","birthday":"05-10-1981"},{"name":"Laurens van den Oever","birthday":"19-10-1977"},{"name":"Bob van Oorschot","birthday":"20-10-1982"},{"name":"Richard Lems","birthday":"07-11-1988"},{"name":"Mark de Jong","birthday":"11-11-1986"}];
function _calculateAge(birthday) {
    var ageDifMs = Date.now() - Date.parse(birthday);
    var ageDate = new Date(ageDifMs); 
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
function _calculateDaysToBirthday(birthday) { 
	birthday = new Date(birthday);
	today = new Date();
	today.setDate(today.getDate()-1);
	birthday.setFullYear(today.getFullYear());
	if (today > birthday) {
	  birthday.setFullYear(today.getFullYear() + 1);
	}
	return Math.floor((birthday - today) / (1000*60*60*24))
}
persons.forEach(function(person){
	birthday = person.birthday;
	birthday = birthday.split('-');
	birthday = birthday[1] + '/' + birthday[0] + '/' +  birthday[2];
	person.birthday = birthday;
	daysToBirthday = _calculateDaysToBirthday(birthday);
	person.daysToBirthday = daysToBirthday;
	age = _calculateAge(birthday);
	if(daysToBirthday == 0) {
		person.message = ' turns ' + age + ' today!';
	}
	else if (daysToBirthday == 1) {
		person.message = ' turns ' + age + ' tomorrow!';
	}
	else {
		person.message = ' turns ' + age + ' in ' + daysToBirthday + ' days.';
	}
})
persons = _.sortBy(persons, function(person){ return person.daysToBirthday;});
persons = persons.splice(0,3);
Template.birthdays.helpers({
  	birthdays: persons
});
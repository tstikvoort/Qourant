knowYourCompany = new Meteor.Collection('knowYourCompany');
knowYourCompany.allow({
	update: function (userId, doc, fields, modifier) {
		if(fields[0] == 'comments' && fields.length == 1) return true;
	}
});
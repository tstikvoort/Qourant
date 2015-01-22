groceriesLists = new Mongo.Collection('groceriesLists');
groceries020 = new Mongo.Collection("groceries020");
groceries070 = new Mongo.Collection("groceries070");
groceriesQSA = new Mongo.Collection("groceriesQSA");
groceries020.allow({
   insert: function () { return true; },
   update: function () { return true; },
   remove: function () { return true; } 
});
groceries070.allow({
   insert: function () { return true; },
   update: function () { return true; },
   remove: function () { return true; } 
});
groceriesQSA.allow({
   insert: function () { return true; },
   update: function () { return true; },
   remove: function () { return true; } 
});
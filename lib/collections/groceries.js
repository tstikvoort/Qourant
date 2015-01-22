groceriesLists = new Mongo.Collection('groceriesLists');
groceries = new Mongo.Collection('groceries');
groceries.allow({
   insert: function () { return true; },
   update: function () { return true; },
   remove: function () { return true; } 
});
groceries020 = new Mongo.Collection("groceries020");
groceries070 = new Mongo.Collection("groceries070");
groceriesQSA = new Mongo.Collection("groceriesQSA");
CommentsGroceries = new Mongo.Collection("commentsGroceries");
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
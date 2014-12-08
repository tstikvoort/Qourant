Tasks020 = new Mongo.Collection("tasks020");
Tasks070 = new Mongo.Collection("tasks070");
TasksSF = new Mongo.Collection("tasksSF");
CommentsGroceries = new Mongo.Collection("commentsGroceries");
Tasks020.allow({
   insert: function () { return true; },
   update: function () { return true; },
   remove: function () { return true; } 
});
Tasks070.allow({
   insert: function () { return true; },
   update: function () { return true; },
   remove: function () { return true; } 
});
TasksSF.allow({
   insert: function () { return true; },
   update: function () { return true; },
   remove: function () { return true; } 
});
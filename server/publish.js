Meteor.publish('slidepics', function(){
  return slidepics.find();
});
Meteor.publish('photoGalleries', function(){
  return photoGalleries.find();
});
Meteor.publish('galleryPhotos', function(){
  return galleryPhotos.find();
});
Meteor.publish('galleryComments', function(){
  return galleryComments.find();
});
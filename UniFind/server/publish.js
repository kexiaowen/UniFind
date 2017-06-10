Meteor.publish('ownPostsLost', function(){
  return PostsLost.find({author: this.userId});
});

Meteor.publish('allPostsLost', function(){
  return PostsLost.find();
});

Meteor.publish('singlePostLost', function(id){
  check(id, String);
  return PostsLost.find({_id: id});
});

Meteor.publish('ownPostsFound', function(){
  return PostsFound.find({author: this.userId});
});

Meteor.publish('allPostsFound', function(){
  return PostsFound.find();
});

Meteor.publish('singlePostFound', function(id){
  check(id, String);
  return PostsFound.find({_id: id});
});

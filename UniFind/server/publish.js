Meteor.publish('posts', function(){
  return Posts.find({author: this.userId});
});

Meteor.publish('allPosts', function(){
  return Posts.find();
});

Meteor.publish('singlePost', function(id){
  check(id, String);
  return Posts.find({_id: id});
});

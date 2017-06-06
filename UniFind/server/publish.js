Meteor.publish('posts', function(){
  return Posts.find({author: this.userId});
});

Meteor.publish('singlePost', function(id){
  check(id, String);
  return Posts.find({_id: id});
});

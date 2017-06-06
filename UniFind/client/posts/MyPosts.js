Template.MyPosts.onCreated(function(){
  var self = this;
  self.autorun(function() {
    self.subscribe('posts');
  });
});
Template.MyPosts.helpers({
  posts: ()=> {
    return Posts.find({author: this.userId});
  }
});
Template.MyPosts.events({
  'click .new-post' : () =>{
    Session.set('newPost', true);

  }
});

Template.MyPosts.onCreated(function(){
  var self = this;
  self.autorun(function() {
    self.subscribe('ownPostsLost');
    self.subscribe('ownPostsFound');
  });
});
Template.MyPosts.helpers({
  postsLost: ()=> {
    return PostsLost.find();
  },
  postsFound: ()=> {
    return PostsFound.find();
  }
});
Template.MyPosts.events({
  'click .new-post' : () =>{
    Session.set('newPost', true);

  }
});

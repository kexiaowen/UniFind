Template.ViewPosts.onCreated(function(){
  var self = this;
  self.autorun(function() {
    self.subscribe('ownPostsLost');
    self.subscribe('ownPostsFound');
    self.subscribe('images');
  });
});
Template.ViewPosts.helpers({
  postsLost: ()=> {
    return PostsLost.find();
  },
  postsFound: ()=> {
    return PostsFound.find();
  }
});

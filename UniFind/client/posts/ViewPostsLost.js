Template.ViewPostsLost.onCreated(function(){
  var self = this;
  self.autorun(function() {
    self.subscribe('ownPostsLost');
    self.subscribe('images');
  });
});
Template.ViewPostsLost.helpers({
  postsLost: ()=> {
    return PostsLost.find();
  }
});

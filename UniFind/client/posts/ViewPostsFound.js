Template.ViewPostsFound.onCreated(function(){
  var self = this;
  self.autorun(function() {
    self.subscribe('ownPostsFound');
    self.subscribe('images');
  });
});
Template.ViewPostsFound.helpers({
  postsFound: ()=> {
    return PostsFound.find();
  }
});

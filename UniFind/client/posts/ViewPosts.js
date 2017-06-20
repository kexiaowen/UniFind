Template.ViewPosts.onCreated(function(){
  var self = this;
  self.autorun(function() {
    self.subscribe('ownPostsLost');
    self.subscribe('ownPostsFound');
  });
});
Template.ViewPosts.helpers({
  postsLost: ()=> {
    return PostsLost.find({author: this.userId});
  },
  postsFound: ()=> {
    return PostsFound.find({author: this.userId});
  }
});

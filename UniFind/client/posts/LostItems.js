Template.LostItems.onCreated(function(){
  var self = this;
  self.autorun(function() {
    self.subscribe('allPostsLost');
  });
});

Template.LostItems.helpers({
  posts: ()=> {
    return PostsLost.find({}); // belong to the lost/found(?) category
  }
});

Template.FoundItems.onCreated(function(){
  var self = this;
  self.autorun(function() {
    self.subscribe('allPostsFound');
  });
});

Template.FoundItems.helpers({
  posts: ()=> {
    return PostsFound.find({}); // belong to the lost/found(?) category
  }
});

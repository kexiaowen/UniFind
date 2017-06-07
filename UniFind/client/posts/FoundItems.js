Template.FoundItems.onCreated(function(){
  var self = this;
  self.autorun(function() {
    self.subscribe('allPosts');
  });
});

Template.FoundItems.helpers({
  posts: ()=> {
    return Posts.find({}); // belong to the lost/found(?) category
  }
});

Template.LostItems.onCreated(function(){
  var self = this;
  self.autorun(function() {
    self.subscribe('posts');
  });
});
Template.LostItems.helpers({
  posts: ()=> {
    return Posts.find({}); // belong to the lost/found(?) category
  }
});

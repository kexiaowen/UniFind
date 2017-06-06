Template.PostSingle.onCreated(function(){
  var self = this;
  self.autorun(function() {
    var id = FlowRouter.getParam('id');
    self.subscribe('singlePost', id);
  });
});
Template.PostSingle.helpers({
  post: ()=> {
    var id = FlowRouter.getParam('id');
    return Posts.findOne({_id: id});
  }
});

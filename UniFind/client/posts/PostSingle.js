Template.PostSingle.onCreated(function(){
  var self = this;
  self.autorun(function() {
    var id = FlowRouter.getParam('id');
    self.subscribe('singlePostFound', id);
    self.subscribe('singlePostLost', id);
  });
});
Template.PostSingle.helpers({
  post: ()=> {
    var id = FlowRouter.getParam('id');

    if(!PostsFound.findOne({_id: id})){
      return PostsLost.findOne({_id: id});
    }

    return PostsFound.findOne({_id: id});
  }
});

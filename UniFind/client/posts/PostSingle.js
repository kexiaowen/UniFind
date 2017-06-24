Template.PostSingle.onCreated(function(){
  var self = this;
  self.autorun(function() {
    var id = FlowRouter.getParam('id');
    self.subscribe('singlePostFound', id);
    self.subscribe('singlePostLost', id);
    self.subscribe('images');
  });
});
Template.PostSingle.helpers({
  showImage: function(){
    var id = FlowRouter.getParam('id');

    if(!PostsFound.findOne({_id: id})){
      var post = PostsLost.findOne({_id: id});
    }

    else{
      post = PostsFound.findOne({_id: id});
    }
    var imgId = post.file._id;
    var image = Images.findOne({_id: imgId});
    return image;
  },
  post: ()=> {
    var id = FlowRouter.getParam('id');

    if(!PostsFound.findOne({_id: id})){
      return PostsLost.findOne({_id: id});
    }

    return PostsFound.findOne({_id: id});
  }
});

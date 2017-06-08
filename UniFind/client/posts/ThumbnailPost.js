Template.Post.onCreated(function(){
});

Template.Post.helpers({
  title: function() {
    var post = Posts.findOne({_id: this._id});
    return post.summary;
  },
  desc: function(){
    var post = Posts.findOne({_id: this._id});
    return post.desc;
  }
});

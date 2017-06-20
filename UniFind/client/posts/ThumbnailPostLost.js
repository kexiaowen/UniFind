Template.ThumbnailPostLost.helpers({
  title: function() {
    var post = PostsLost.findOne({_id: this._id});
    return post.summary;
  },
  category: function() {
    var post = PostsLost.findOne({_id: this._id});
    return post.category;
  },
  colour: function() {
    var post = PostsLost.findOne({_id: this._id});
    return post.colour;
  },
  desc: function(){
    var post = PostsLost.findOne({_id: this._id});
    return post.desc;
  },
  date: function(){
    var post = PostsLost.findOne({_id: this._id});
    return post.createdAt;
  }
});

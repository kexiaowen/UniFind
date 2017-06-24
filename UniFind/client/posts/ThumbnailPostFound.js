/*Template.ThumbnailPostFound.onCreated(function(){
  var self = this;
  self.autorun(function() {
    self.subscribe('images');
  });
});*/

Template.ThumbnailPostFound.helpers({
  showImage: function(){
    var post = PostsFound.findOne({_id: this._id});
    var imgId = post.file._id;
    var image = Images.findOne({_id: imgId});
    console.log(image);
    return image;
  }
  /*title: function() {
    var post = PostsFound.findOne({_id: this._id});
    return post.summary;
  },
  category: function() {
    var post = PostsFound.findOne({_id: this._id});
    return post.category;
  },
  colour: function() {
    var post = PostsFound.findOne({_id: this._id});
    return post.colour;
  },
  desc: function(){
    var post = PostsFound.findOne({_id: this._id});
    return post.desc;
  },
  date: function(){
    var post = PostsFound.findOne({_id: this._id});
    return post.createdAt;
  }*/
});

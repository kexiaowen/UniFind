Template.ThumbnailPostLost.helpers({
  showImage: function(){
    //var post = PostsLost.findOne({_id: this._id});
    var imgId = this.file._id;
    var image = Images.findOne({_id: imgId});
    return image;
  },
  changeStatus: function(){
    return this.status === "waiting"? false : true;
  },
  username: function() {
    var post = PostsLost.findOne({_id: this._id});
    var userid = post.author;
    console.log(userid);
    const user = Meteor.users.findOne(userid);
    console.log(user);
    return user.username;
  }
  /*title: function() {
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
  }*/
});

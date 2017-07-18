Template.Notification.onCreated(function(){
  var self = this;
  self.autorun(function() {
    self.subscribe('allPostsFound');
    self.subscribe('allPostsLost');
    self.subscribe('userData');
    self.subscribe('images');
    self.subscribe('generalNotifications', Meteor.userId());
  });
});

Template.Notification.helpers({
  postsCount: function(){
    var posts = [];
    GeneralNotifications.find().forEach(function(doc){
      var id = doc.matchedPost;
      if(PostsLost.findOne({_id: id})){
        post = PostsLost.findOne({_id: id});
        posts.push(post);
      }
      else if(PostsFound.findOne({_id: id})){
        post = PostsFound.findOne({_id: id});
        posts.push(post);
      }
    });
    return posts.length;
  },
  posts: function(){
    var posts = [];
    var notifications = GeneralNotifications.find({}, { sort: { createdAt: -1 } });
    notifications.forEach(function(doc){
      var id = doc.matchedPost;
      if(PostsLost.findOne({_id: id})){
        post = PostsLost.findOne({_id: id})
        posts.push(post);
      }
      else if(PostsFound.findOne({_id: id})){
        post = PostsFound.findOne({_id: id});
        posts.push(post);
      }

    });
    return posts;
  },
  isPostFound: function(){
    return PostsFound.findOne({_id: this._id})? true: false;
  }
});

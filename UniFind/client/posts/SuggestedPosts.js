Template.SuggestedPosts.onCreated(function(){
  var self = this;
  self.autorun(function() {
    self.subscribe('allPostsFound', Session.get("searchValue"));
    self.subscribe('allPostsLost', Session.get("searchValue"));
    self.subscribe('userData');
    self.subscribe('images');
  });

});

Template.SuggestedPosts.helpers({
  posts: function() {
    if(Session.get("newPostFound")){
      var newPost = PostsFound.findOne({author: Meteor.userId()}, {sort: {createdAt:-1}});
      var cat = newPost.category;
      var result = PostsLost.find({category: cat, status: "waiting"}, { sort: { createdAt: -1 } });
      if(result.count() >= 1){
        return result;
      }
      else{
        var year = newPost.year;
        return PostsLost.find({year: year, status: "waiting"}, { sort: { createdAt: -1 }});
      }
    }
    else if(Session.get("newPostLost")){
      newPost = PostsLost.findOne({author: Meteor.userId()}, {sort: {createdAt:-1}});
      cat = newPost.category;
      result = PostsFound.find({category: cat, status: "waiting"}, { sort: { createdAt: -1 } });

      if(result.count() >= 1){
        return result;
      }
      else{
        year = newPost.year;
        return PostsFound.find({year: year, status: "waiting"}, { sort: { createdAt: -1 }});
      }
    }
  },
  reportLost: function(){
    return (Session.get("newPostLost") ? true:false);
  },
  reported: function(){
    if(Session.get("newPostLost") || Session.get("newPostFound")){
      return true;
    }
    else{
      return false;
    }
  }
});

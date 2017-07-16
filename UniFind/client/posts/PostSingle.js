Template.PostSingle.onCreated(function(){
  var self = this;
  self.autorun(function() {
    var id = FlowRouter.getParam('id');
    self.subscribe('singlePostFound', id);
    self.subscribe('singlePostLost', id);
    self.subscribe('images');
    self.subscribe('chats');
    self.subscribe('userData');
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
  },
  isNotAuthor: function(){
    var id = FlowRouter.getParam('id');
    if(!PostsFound.findOne({_id: id})){
      var post = PostsLost.findOne({_id: id});
    }
    else{
      post = PostsFound.findOne({_id: id});
    }
    return post.author !== Meteor.userId();
  },
  chatId: function(){
    var id = FlowRouter.getParam('id');

    if(!PostsFound.findOne({_id: id})){
      var post = PostsLost.findOne({_id: id});
    }

    else{
      post = PostsFound.findOne({_id: id});
    }
    var posterId = post.author;
    Meteor.call('getChat', posterId, id, function (err, res) {
        if (err) { // error
          console.log("getChat error...");
        } else {
          Session.set("chatId", res);
        }
      }
    );
    var chatId = Session.get('chatId');
    return chatId;
  },
  username: function(userId){
    const user = Meteor.users.findOne(userId);
  /*username: function() {
    var id = FlowRouter.getParam('id');
    var post = PostsFound.findOne({_id: id});
    if(!PostsFound.findOne({_id: id})){
      post = PostsLost.findOne({_id: id});
    }
    var userid = post.author;
    const user = Meteor.users.findOne(userid);
>>>>>>> Stashed changes*/
    return user.username;
  }
});

Template.PostSingle.events({

  'click .view-chat': function(){
    var id = FlowRouter.getParam('id');
    FlowRouter.go('inbox');
    FlowRouter.setQueryParams({item: id});
  }
});

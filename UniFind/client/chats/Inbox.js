Template.Inbox.onCreated(function(){
  var self = this;
  self.autorun(function() {
    self.subscribe('chats');
    self.subscribe('images');
    self.subscribe('allPostsLost');
    self.subscribe('allPostsFound');
    self.subscribe('inboxNotifications');
  });
});

Template.Inbox.helpers({
  chats: function(){
    var itemId = FlowRouter.getQueryParam("item");
    if(itemId){
      return Chats.find({item: itemId});
    }
    else{
      return Chats.find({});
    }
  },
  imageIsUploaded: function(itemId){
    if(!PostsFound.findOne({_id: itemId})){
      var post = PostsLost.findOne({_id: itemId});
    }
    else{
      post = PostsFound.findOne({_id: itemId});
    }
    var imgId = post.file._id;
    var image = Images.findOne({_id: imgId});
    return image.isUploaded();
  },
  imageurl: function(itemId){
    if(!PostsFound.findOne({_id: itemId})){
      var post = PostsLost.findOne({_id: itemId});
    }
    else{
      post = PostsFound.findOne({_id: itemId});
    }
    var imgId = post.file._id;
    var image = Images.findOne({_id: imgId});
    return image.url();
  },
  summary: function(itemId){
    if(!PostsFound.findOne({_id: itemId})){
      var post = PostsLost.findOne({_id: itemId});
    }
    else{
      post = PostsFound.findOne({_id: itemId});
    }
    return post.summary;
  },
  recentMsg: function(messages){
    var len = messages.length;
    return messages[len-1].text;
  },
  username: function(user1Id){
    return "tempUserName";
  }
});

Template.Inbox.events({
  'click .chat': function(){
    Meteor.call('updateUnread', this._id);
  }
});

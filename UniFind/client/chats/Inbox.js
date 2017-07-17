Template.Inbox.onCreated(function(){
  var self = this;
  self.autorun(function() {
    self.subscribe('chats');
    self.subscribe('images');
    self.subscribe('allPostsLost');
    self.subscribe('allPostsFound');
    self.subscribe('inboxNotifications');
    self.subscribe('userData');
  });
});

Template.Inbox.helpers({
  chats: function(){
    var itemId = FlowRouter.getQueryParam("item");
    var chatArray = [];
    if(itemId){
      Chats.find({item: itemId}).forEach(function(doc){
        if(doc.messages.length >= 1){
          chatArray.push(doc);
        }
      });
      return chatArray;
    }
    else{
      Chats.find().forEach(function(doc){
        if(doc.messages.length >= 1){
          chatArray.push(doc);
        }
      });
      return chatArray;
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
  username: function(user1Id, user2Id){
    var userId = user1Id === Meteor.userId()? user2Id : user1Id;
    const user = Meteor.users.findOne(userId);
    return user.username;
  }
});

Template.Inbox.events({
  'click .chat': function(){
    Meteor.call('updateUnread', this._id);
  }
});

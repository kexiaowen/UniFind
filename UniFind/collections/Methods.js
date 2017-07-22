import { Accounts } from 'meteor/accounts-base';

Meteor.methods({

  deletePostLost:function(id) {
    PostsLost.remove(id);
  },
  deletePostFound:function(id) {
    PostsFound.remove(id);
  },
  getChat:function(otherUserId, itemId){
    // find a chat that has the itemID and two users that match current user id and the requested user id
    var chatId;
    var filter = {
      $or: [
        {
          user1Id: this.userId,
          user2Id: otherUserId,
          item: itemId
        },
        {
          user2Id: this.userId,
          user1Id: otherUserId,
          item: itemId
        }
      ]
    };

    var chat = Chats.findOne(filter);
    if (!chat) { // no chat matching the filter - need to insert a new one
      chatId = Chats.insert({
        item: itemId,
        user1Id: this.userId,
        user2Id: otherUserId,
        messages: []
      });
    } else { // there is a chat going already - use that.
      chatId = chat._id;
    }
    return chatId;
  },
  createChatNotification: function(chat, target){
    var len = chat.messages.length;
    var sentBy = chat.messages[len-1].sentBy;
    if( sentBy !== target){
      InboxNotifications.insert({
        userId: target,
        chatId: chat._id,
        message: chat.messages[len-1],
        sentBy: sentBy,
        createdAt: new Date(),
        read: false
      });
    }
  },
  updateUnread: function(chatId){
    var notification = InboxNotifications.find({chatId: chatId, read: false});
    notification.forEach(function(doc){
      InboxNotifications.update(doc._id,{
        $set: {
          read: true
        }
      });
    });
  },
  createGeneralNotification: function(post, target){
    if(!GeneralNotifications.findOne({userId: target, matchedPost: post})){
      GeneralNotifications.insert({
        userId: target,
        matchedPost: post,
        createdAt: new Date(),
        read: false
      });
    }
    else{

    }
  },
  editEmail: function(userId, newEmail) {
    Accounts.addEmail(this.userId, newEmail);
    //Accounts.sendVerificationEmail(this.userId, newEmail);
  },
  removeEmail: function(userId, email) {
    Accounts.removeEmail(this.userId, email);
  },
  editUsername: function(userId, newUsername) {
    Accounts.setUsername(this.userId, newUsername);
  },
  resetPwd: function(userId) {
    Accounts.sendResetPasswordEmail(this.userId);
  },
  findUser: function(email) {
    return Accounts.findUserByEmail(email);
  }
});

InboxNotifications = new Mongo.Collection('inboxNotifications');

GeneralNotifications = new Mongo.Collection('generalNotifications');

InboxNotifications.allow({
  insert: function(userId,doc){
    return !!userId;
  },
  update: function(userId, doc){
    return !!userId;
  }
});

GeneralNotifications.allow({
  insert: function(userId,doc){
    return !!userId;
  },
  update: function(userId, doc){
    return !!userId;
  }
});

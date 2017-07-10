Chats = new Mongo.Collection('chats');

Chats.allow({
  insert: function(userId,doc){
    return !!userId;
  },
  update: function(userId, doc){
    return !!userId;
  }
});

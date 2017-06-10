import PostSchema from 'schema.js';
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

PostsFound = new Mongo.Collection('postsFound');
PostsLost = new Mongo.Collection('postsLost');

PostsFound.allow({
  insert: function(userId,doc){
    return !!userId;
  },
  update: function(userId, doc){
    return !!userId;
  }
});

PostsLost.allow({
  insert: function(userId,doc){
    return !!userId;
  },
  update: function(userId, doc){
    return !!userId;
  }
});

Meteor.methods({

  deletePostFound:function(id) {
    PostsFound.remove(id);
  },
  deletePostLost:function(id) {
    PostsLost.remove(id);
  }
});


PostsLost.attachSchema(PostSchema);
PostsFound.attachSchema(PostSchema);

import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Posts = new Mongo.Collection('posts');


Posts.allow({
  insert: function(userId,doc){
    return !!userId;
  },
  update: function(userId, doc){
    return !!userId;
  }
});

PostSchema = new SimpleSchema ({
  summary: {
    type: String,
    label: "Summary"
  },
  desc: {
    type: String,
    label: "Description"
  },

  author: {
    type: String,
    label: "Author",
    autoValue: function(){
      return this.userId
    },
    autoform: {
      type: "hidden"
    }
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function(){
      return new Date()

    },
    autoform: {
      type: "hidden"
    }
  }
});

Meteor.methods({

  deletePost:function(id) {
    Posts.remove(id);

  }
});

Posts.attachSchema(PostSchema);

// import PostSchema from 'schema.js';
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

PostSchema = new SimpleSchema ({

  summary: {
    type: String,
    label: "Summary"
  },

  category: {
    type: String,
    label: "Category",
    allowedValues: ["Handphone", "Laptop", "Wallet", "Jacket", "Thumbdrive", "Waterbottle", "Others"],
    autoform: {
          afFieldInput: {
            firstOption: "(Select a category)"
          }
    }
  },

  colour:{
    type: String,
    label: "Colour",
    optional: true,
    autoform:{
      type: "select-radio-inline",
      options: [
        {label: "White", value: "White"},
        {label: "Black", value: "Black"},
        {label: "Gold", value: "Gold"},
        {label: "Silver", value: "Silver"},
        {label:  "Others", value: "Others"}
      ]
    }

  },
  desc: {
    type: String,
    label: "Description (Useful information)",
    autoform:{
      type: "textarea",
      rows: 6
    }
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

  deletePostFound:function(id) {
    PostsFound.remove(id);
  },
  deletePostLost:function(id) {
    PostsLost.remove(id);
  }
});


PostsLost.attachSchema(PostSchema);
PostsFound.attachSchema(PostSchema);

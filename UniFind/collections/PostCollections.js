// import PostSchema from 'schema.js';
//import SimpleSchema from 'simpl-schema';
//SimpleSchema.extendOptions(['autoform']);
import { Meteor } from 'meteor/meteor';

PostsFound = new Mongo.Collection('postsFound');
PostsLost = new Mongo.Collection('postsLost');
Images = new FS.Collection("images", {
  filter: {
    maxSize: 1048576, // in bytes
    allow: {
      contentTypes: ['image/*'],
      extensions: ['png','jpg','jpeg']
    },
    onInvalid: function (message) {
      alert(message);
    }
  },
  stores: [
    new FS.Store.FileSystem("thumbs", {
        transformWrite: function(fileObj, readStream, writeStream) {
          // Transform the image into a 10x10px thumbnail
          gm(readStream, fileObj.name()).resize('200', '200').stream().pipe(writeStream);
        }
    }),
    new FS.Store.FileSystem("images", {path: "~/uploads"})
  ]
});

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

Images.allow({
  insert: function () {
    // add custom authentication code here
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  },
  download: function(userId, fileObj) {
     return true;
 }
});




/*PostSchema = new SimpleSchema ({

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
});*/




//PostsLost.attachSchema(PostSchema);
//PostsFound.attachSchema(PostSchema);

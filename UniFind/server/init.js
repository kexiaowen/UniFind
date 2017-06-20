import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  PostsFound._ensureIndex({
    "summary": "text"
  });
  PostsLost._ensureIndex({
    "summary": "text"
  });
});

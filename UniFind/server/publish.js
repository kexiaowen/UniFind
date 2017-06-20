Meteor.publish('ownPostsLost', function(){
  return PostsLost.find({author: this.userId});
});

Meteor.publish('allPostsLost', function(searchValue){
  if(!searchValue){
    return PostsLost.find({});
  }
  console.log("Searching for ", searchValue);
  var cursor1 = PostsLost.find(
      { $text: {$search: searchValue} },
      {

        fields: {
          score: { $meta: "textScore" }
        },

        sort: {
          score: { $meta: "textScore" }
        }
      }
    );
    return cursor1;
});

Meteor.publish('singlePostLost', function(id){
  check(id, String);
  return PostsLost.find({_id: id});
});

Meteor.publish('ownPostsFound', function(){
  return PostsFound.find({author: this.userId});
});

Meteor.publish('allPostsFound', function(searchValue){
  if(!searchValue){
    return PostsFound.find({});
  }
  console.log("Searching for ", searchValue);
  var cursor2 = PostsFound.find(
      { $text: {$search: searchValue} },
      {

        fields: {
          score: { $meta: "textScore" }
        },

        sort: {
          score: { $meta: "textScore" }
        }
      }
    );
    return cursor2;
});

Meteor.publish('singlePostFound', function(id){
  check(id, String);
  return PostsFound.find({_id: id});
});

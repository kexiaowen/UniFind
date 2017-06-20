Template.FoundItems.onCreated(function(){
  var self = this;
  self.autorun(function() {
    self.subscribe('allPostsFound', Session.get("searchValue"));
  });
  Session.set("searchValue", "");
  Session.set("handphoneChecked", false);
  Session.set("jacketChecked", false);
  Session.set("thumbdriveChecked", false);
  Session.set("waterbottleChecked", false);
  Session.set("othersChecked", false);
});

Template.FoundItems.helpers({
  posts: function() {
    if(Session.get("searchValue")){
      return PostsFound.find({}, {sort: [["score"]]});
    } else{
      if(Session.get("handphoneChecked")){
        var post = PostsFound.find({category: "Handphone"});
      }
      else if(Session.get("jacketChecked")){
        post = PostsFound.find({category: "Jacket"});
      }
      else if(Session.get("laptopChecked")){
        post = PostsFound.find({category: "Laptop"});
      }
      else if(Session.get("thumbdriveChecked")){
        post = PostsFound.find({category: "Thumbdrive"});
      }
      else if(Session.get("waterbottleChecked")){
        post = PostsFound.find({category: "Waterbottle"});
      }
      else if(Session.get("othersChecked")){
        post = PostsFound.find({category: "Others"});
      }
      else{
        post = PostsFound.find({}, { sort: { createdAt: -1 } }); // belong to the lost/found(?) category
      }
      return post;
    }
  }
});

Template.FoundItems.events({
  "submit #search": function(event){
    event.preventDefault();
    Session.set("searchValue", $("#searchValue").val());
  },
  "click #close": function(){
    Session.set("searchValue", "");
  }
});

Template.LostItems.onCreated(function(){
  var self = this;
  self.autorun(function() {
    self.subscribe('allPostsLost', Session.get("searchValue"));
    self.subscribe('images');
  });
  Session.set("hasCatQuery", false);
  Session.set("hasColQuery", false);

  Session.set("searchValue", "");
  /*Session.set("searchValue", "");
  Session.set("handphoneChecked", false);
  Session.set("jacketChecked", false);
  Session.set("thumbdriveChecked", false);
  Session.set("waterbottleChecked", false);
  Session.set("othersChecked", false);*/
});

Template.LostItems.helpers({
  posts: function() {
    if(Session.get("searchValue")){
      var post = PostsLost.find({}, {sort: [["score"]]});
    } else {
      if(Session.get("hasCatQuery") && Session.get("hasColQuery")){
        var queryParam = FlowRouter.getQueryParam("cat");
        var colourParam = FlowRouter.getQueryParam("colour");
        post = PostsLost.find({category: queryParam, colour: colourParam});
      } else if (Session.get("hasCatQuery")) {
        var queryParam = FlowRouter.getQueryParam("cat");
        post = PostsLost.find({category: queryParam});
      } else if (Session.get("hasColQuery")) {
        var colourParam = FlowRouter.getQueryParam("colour");
        post = PostsLost.find({colour: colourParam});
      } else {
        post = PostsLost.find({}, { sort: { createdAt: -1 } }); // belong to the lost/found(?) category
      }
    }
    return post;
    /*if(Session.get("searchValue")){
      return PostsLost.find({}, {sort: [["score"]]});
    } else{
      if(Session.get("handphoneChecked")){
        var post = PostsLost.find({category: "Handphone"});
      }
      else if(Session.get("jacketChecked")){
        post = PostsLost.find({category: "Jacket"});
      }
      else if(Session.get("laptopChecked")){
        post = PostsLost.find({category: "Laptop"});
      }
      else if(Session.get("thumbdriveChecked")){
        post = PostsLost.find({category: "Thumbdrive"});
      }
      else if(Session.get("waterbottleChecked")){
        post = PostsLost.find({category: "Waterbottle"});
      }
      else if(Session.get("othersChecked")){
        post = PostsLost.find({category: "Others"});
      }
      else{
        post = PostsLost.find({}, { sort: { createdAt: -1 } }); // belong to the lost/found(?) category
      }
      return post;
    }*/
  }
});

Template.LostItems.events({
  "submit #search": function(event){
    event.preventDefault();
    Session.set("searchValue", $("#searchValue").val());
  },
  "click #close": function(){
    Session.set("searchValue", "");
  },
  "click #home": function(){
    //view all posts
    Session.set("hasCatQuery", false);
    Session.set("hasColQuery", false);
    Session.set("searchValue", "");
  }
});

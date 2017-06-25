Template.FoundItems.onRendered(function(){
  $('.tooltipped').tooltip({delay: 50});
});

Template.FoundItems.onCreated(function(){
  var self = this;
  self.autorun(function() {
    self.subscribe('allPostsFound', Session.get("searchValue"));
    self.subscribe('images');
  });
  Session.set("hasCatQuery", false);
  Session.set("hasColQuery", false);
  Session.set("searchValue", "");
  /*Session.set("handphoneChecked", false);
  Session.set("jacketChecked", false);
  Session.set("thumbdriveChecked", false);
  Session.set("waterbottleChecked", false);
  Session.set("othersChecked", false);*/
});

Template.FoundItems.helpers({
  posts: function() {
    if(Session.get("searchValue")){
      var post = PostsFound.find({}, {sort: [["score"]]});
    } else {
      if(Session.get("hasCatQuery") && Session.get("hasColQuery")){
        var queryParam = FlowRouter.getQueryParam("cat");
        var colourParam = FlowRouter.getQueryParam("colour");
        post = PostsFound.find({category: queryParam, colour: colourParam});
      } else if (Session.get("hasCatQuery")) {
        var queryParam = FlowRouter.getQueryParam("cat");
        post = PostsFound.find({category: queryParam});
      } else if (Session.get("hasColQuery")) {
        var colourParam = FlowRouter.getQueryParam("colour");
        post = PostsFound.find({colour: colourParam});
      } else {
        post = PostsFound.find({}, { sort: { createdAt: -1 } }); // belong to the lost/found(?) category
      }
    }
    return post;
      /*if(Session.get("handphoneChecked")){
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
      }*/

  }
});

Template.FoundItems.events({
  "submit #search": function(event){
    event.preventDefault();
    Session.set("searchValue", $("#searchValue").val());
  },
  "click #close": function(){
    Session.set("searchValue", "");
  },
  "click #replay": function(){
    //view all posts
    Session.set("hasCatQuery", false);
    Session.set("hasColQuery", false);
    Session.set("searchValue", "");
  }
});

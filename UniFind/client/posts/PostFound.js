Template.PostFound.onRendered(function() {
  $('.tooltipped').tooltip({delay: 50});
  $('.modal').modal();

});

Template.PostFound.onCreated(function(){
  this.editMode = new ReactiveVar(false);
  Session.set("deletePostFoundId", "");
});

Template.PostFound.helpers({
  showImage: function(){
    var post = PostsFound.findOne({_id: this._id});
    var imgId = post.file._id;
    var image = Images.findOne({_id: imgId});
    return image;
  },
  updatePostId: function() {
    return this._id;
  },
  editMode: function(){
    return Template.instance().editMode.get();
  },
  isAuthor: function() {
    var user = Meteor.user();
    if (!user) { return false; };

    var post = PostsFound.findOne({_id: this._id});
    if (!post) { return false; };

    return post.author === Meteor.userId();
  },
  changeStatus: function(){
    return this.status === "waiting"? false : true;
  }
});

Template.PostFound.events({
  'click .fa-trash' : function(){
    Meteor.call('deletePostFound', this._id);
  },
  'click .fa-pencil' : function(event, template){
    template.editMode.set(!template.editMode.get());
  },

  'click #updateStatus': function(){
    PostsFound.update(this._id, {
      $set: {
        status: "Claimed"
      }
    });
  },

  'click #redoStatus': function(){
    PostsFound.update(this._id, {
      $set: {
        status: "waiting"
      }
    });
  },

  'click .delete-post-found-btn' : function() {
    Session.set("deletePostFoundId", this._id);
  },
  'click .confirm-delete' : function() {
    var postId = Session.get("deletePostFoundId")
    Meteor.call('deletePostFound', postId);
    FlowRouter.reload();
  }
});

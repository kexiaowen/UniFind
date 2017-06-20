Template.PostFound.onRendered(function() {
  $('.tooltipped').tooltip({delay: 50});
});

Template.PostFound.onCreated(function(){
  this.editMode = new ReactiveVar(false);
});

Template.PostFound.helpers({
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
  }
});

Template.PostFound.events({

  'click .fa-trash' : function(){
    Meteor.call('deletePostFound', this._id);
  },
  'click .fa-pencil' : function(event, template){
    template.editMode.set(!template.editMode.get());
  },
  'click .delete-post' : function() {
    new Confirmation({
      message: "Do you want to delete this post? Deleted posts cannot be recovered!",
      title: "Delete",
      cancelText: "Cancel",
      okText: "Delete",
      success: false, // whether the button should be green or red
      focus: "cancel" // which button to autofocus, "cancel" (default) or "ok", or "none"
    }, function (ok) {
      // ok is true if the user clicked on "ok", false otherwise
      Meteor.call('deletePostFound', this._id);
    });
  }
});

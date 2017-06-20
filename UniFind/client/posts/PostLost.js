Template.PostLost.onCreated(function(){
  this.editMode = new ReactiveVar(false);
});

Template.PostLost.helpers({
  updatePostId: function() {
    return this._id;
  },
  editMode: function(){
    return Template.instance().editMode.get();
  },
  isAuthor: function() {
    var user = Meteor.user();
    if (!user) { return false; };

    var post = PostsLost.findOne({_id: this._id});
    if (!post) { return false; };

    return post.author === Meteor.userId();
  }
});

Template.PostLost.events({

  'click .fa-trash' : function(){
    Meteor.call('deletePostLost', this._id);
  },
  'click .fa-pencil' : function(event, template){
    template.editMode.set(!template.editMode.get());
  },
  'click .delete-post' : function() {
    new Confirmation({
      message: "Do you want to delete this post? You cannot undo this once you click delete!",
      title: "Delete",
      cancelText: "Cancel",
      okText: "Delete",
      success: false, // whether the button should be green or red
      focus: "cancel" // which button to autofocus, "cancel" (default) or "ok", or "none"
    }, function (ok) {
      Meteor.call('deletePostLost', this._id);
    });
  }
});

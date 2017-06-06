Template.Post.onCreated(function(){
  this.editMode = new ReactiveVar(false);
});

Template.Post.helpers({
  updatePostId: function() {
    return this._id;
  },
  editMode: function(){
    return Template.instance().editMode.get();
  }
});

Template.Post.events({

  'click .fa-trash' : function(){
    Meteor.call('deletePost', this._id);
  },
  'click .fa-pencil' : function(event, template){
    template.editMode.set(!template.editMode.get());
  }
});

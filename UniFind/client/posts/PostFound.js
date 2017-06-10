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
  }
});

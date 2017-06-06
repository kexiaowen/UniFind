Template.NewPost.events({
  'click .fa-close' : function () {
    Session.set('newPost', false);

  }
});

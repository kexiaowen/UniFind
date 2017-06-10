Template.NewPost.events({
  'click .fa-close' : function () {
    Session.set('newPost', false);
  },

  'click .new-post-lost' : () =>{
    Session.set('newPostLost', true);
  },

  'click .new-post-found' : () =>{
    Session.set('newPostFound', true);
  },

});

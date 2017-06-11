Template.NewPost.events({
  'click .fa-close' : function () {
    Session.set('newPost', false);
    Session.set('newPostLost', false);
    Session.set('newPostFound', false);
  },

  'click .new-post-lost' : () =>{
    Session.set('newPostLost', true);
    Session.set('newPostFound', false);
  },

  'click .new-post-found' : () =>{
    Session.set('newPostFound', true);
    Session.set('newPostLost', false);
  },

});

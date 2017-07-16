Template.NewPost.onCreated(function(){
  Session.set('displayFoundBtn', true);
  Session.set('displayLostBtn', true);
  Session.set('newPostLost', false);
  Session.set('newPostFound', false);
});

Template.NewPost.events({
  'click .fa-close' : function () {
    // Session.set('newPost', false);
    Session.set('newPostLost', false);
    Session.set('newPostFound', false);
    Session.set('displayFoundBtn', true);
    Session.set('displayLostBtn', true);
  },

  'click .new-post-lost' : () =>{
    Session.set('newPostLost', true);
    Session.set('newPostFound', false);
    Session.set('displayFoundBtn', false);
    Session.set('displayLostBtn', false);
  },

  'click .new-post-found' : () =>{
    Session.set('newPostFound', true);
    Session.set('newPostLost', false);
    Session.set('displayLostBtn', false);
    Session.set('displayFoundBtn', false);
  },

});

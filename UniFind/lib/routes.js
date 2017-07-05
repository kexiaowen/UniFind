import { Meteor } from 'meteor/meteor';

if(Meteor.isClient){
  Accounts.onLogin(function () {
    //FlowRouter.go('my-account');
    FlowRouter.reload();
  });

  Accounts.onLogout(function () {
    FlowRouter.go('home');
    FlowRouter.reload();
  });
}
/*
FlowRouter.triggers.enter([function(context, redirect){
  if(!Meteor.userId()){
    FlowRouter.go('home');
  }
}]);*/

FlowRouter.route('/',{
  name: 'home',
  action() {
    GAnalytics.pageview();
    if(Meteor.userId()) {
      BlazeLayout.render('MainLayout', {main: 'Body'});
    } else {
      BlazeLayout.render('HomeLayout', {main: 'Body'});
    }
  }
});

FlowRouter.route('/my-posts',{
  name: 'my-posts',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'MyPosts'});
  }
});

FlowRouter.route('/suggested-posts',{
  name: 'suggested-posts',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'SuggestedPosts'});
  }
});

FlowRouter.route('/inbox/:id',{
  name: 'chat',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'Chat'});
  }
});

FlowRouter.route('/inbox',{
  name: 'inbox',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'Inbox'});
  }
});

FlowRouter.route('/post/:id',{
  name: 'post',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'PostSingle'});
  }
});
FlowRouter.route('/edit-found/:id',{
  name: 'edit-found',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'EditPostFound'});
  }
});

FlowRouter.route('/edit-lost/:id',{
  name: 'edit-lost',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'EditPostLost'});
  }
});
FlowRouter.route('/search-lost-items',{
  name: 'lost-items',
  action() {
    GAnalytics.pageview();
    if(Meteor.userId()) {
      BlazeLayout.render('MainLayout', {main: 'LostItems'});
    } else {
      BlazeLayout.render('HomeLayout', {main: 'LostItems'});
    }
  }
});

FlowRouter.route('/search-found-items',{
  name: 'found-items',
  action() {
    GAnalytics.pageview();
    if(Meteor.userId()) {
      BlazeLayout.render('MainLayout', {main: 'FoundItems'});
    } else {
      BlazeLayout.render('HomeLayout', {main: 'FoundItems'});
    }
  }
});

FlowRouter.route('/register',{
  name: 'register',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('HomeLayout', {main: 'Register'});
  }
});

FlowRouter.route('/login',{
  name: 'register',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('HomeLayout', {main: 'Login'});
  }
});

FlowRouter.route('/settings',{
  name: 'settings',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'Settings'});
  }
});

FlowRouter.route('/change-password',{
  name: 'change-password',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'ChangePassword'});
  }
});

FlowRouter.route('/view-posts-lost',{
  name: 'view-posts-lost',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'ViewPostsLost'});
  }
});

FlowRouter.route('/view-posts-found',{
  name: 'view-posts-found',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'ViewPostsFound'});
  }
});

FlowRouter.route('/test',{
  name: 'test',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('Home');
  }
});

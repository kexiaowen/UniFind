import { Meteor } from 'meteor/meteor';

if(Meteor.isClient){
  Accounts.onLogin(function () {
    //FlowRouter.go('my-account');
    FlowRouter.reload();
  });

  Accounts.onLogout(function () {
    //FlowRouter.go('home');
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

FlowRouter.route('/post/:id',{
  name: 'post',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'PostSingle'});
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

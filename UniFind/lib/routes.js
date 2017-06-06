import { Meteor } from 'meteor/meteor';

if(Meteor.isClient){
  Accounts.onLogin(function () {
    FlowRouter.go('my-account');
  });

  Accounts.onLogout(function () {
    FlowRouter.go('home');
  });
}

FlowRouter.triggers.enter([function(context, redirect){
  if(!Meteor.userId()){
    FlowRouter.go('home');
  }
}]);

FlowRouter.route('/',{
  name: 'home',
  action() {
    if(Meteor.userId()) {
      FlowRouter.go('my-account');
    }
    GAnalytics.pageview();
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/my-account',{
  name: 'my-account',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'Body'});
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
    BlazeLayout.render('MainLayout', {main: 'LostItems'});
  }
});

FlowRouter.route('/search-found-items',{
  name: 'found-items',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'FoundItems'});
  }
});

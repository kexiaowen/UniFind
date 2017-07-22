/*Template.Profile.events({
  'click .logout' (event) {
    Meteor.logout((er)=>{
      if(er) {
        Materialize.toast(er.reason, 4000);
      } else {
        FlowRouter.go('/login');
        FlowRouter.reload();
      }
    });
  }
});*/
Template.Profile.onCreated(function() {
  this.editEmail = new ReactiveVar(false);
  this.editUsername = new ReactiveVar(false);
})

Template.Profile.events({
  'click .editEmail': function(event, template) {
    template.editEmail.set(!template.editEmail.get());
  },
  'click .editUsername': function(event, template) {
    template.editUsername.set(!template.editUsername.get());
  },
  'click .close-email-form' : function(event, template) {
    template.editEmail.set(!template.editEmail.get());
  },
  'click .close-username-form' : function(event, template) {
    template.editUsername.set(!template.editUsername.get());
  },
  'submit .editEmailForm'(event, template) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const newEmail = target.newEmail.value;
    const oldEmail = Meteor.user().emails[0].address;
    //console.log(oldEmail);
    Meteor.call('editEmail', Meteor.userId, newEmail);

    Meteor.call('removeEmail', Meteor.userId, oldEmail);

    template.editEmail.set(!template.editEmail.get());
  },
  'submit .editUsernameForm'(event, template) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const newUsername = target.newUsername.value;

    Meteor.call('editUsername', Meteor.userId, newUsername);

    template.editUsername.set(!template.editUsername.get());
  },
});


Template.Profile.helpers({
  username: function() {
    return Meteor.user().username;
  },
  email: function() {
    return Meteor.user().emails[0].address;
  },
  editEmail: function() {
    return Template.instance().editEmail.get();
  },
  editUsername: function() {
    return Template.instance().editUsername.get();
  }
});

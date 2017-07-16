Template.ResetPwd.events({
  'submit .resetPwdForm'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const email = target.email.value;

    // var user = Meteor.call("findUser", email);
    // console.log(user);
    // var user = Accounts.findUserByEmail(email);
    // Meteor.call("resetPwd", user.userId);
  },
});

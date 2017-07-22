Template.ResetPwd.events({
  'submit .resetPwdForm'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const email = target.email.value;
    var trimEmail = email.replace(/^\s*|\s*$/g,"");

    Accounts.forgotPassword({email: trimEmail}, function (er) {
        if (er) {
            console.log("error");
            Materialize.toast(er.reason, 5000);
        } else {
            // success
            console.log("success");
            Materialize.toast("A reset password email has been sent.", 5000);
        }
    });
    // var user = Meteor.call("findUser", email);
    // console.log(user);
    // var user = Accounts.findUserByEmail(email);
    // Meteor.call("resetPwd", user.userId);
  },
});

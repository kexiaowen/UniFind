/*Template.Register.onCreated(function(){
  this.hasError = new ReactiveVar(false);
  this.errorMessage = new ReactiveVar("");
});*/

Template.Register.events({
  'submit .registerForm'(event, template) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const email = target.email.value;
    const password = target.password.value;
    const confirmPassword = target.confirmPassword.value;
    // trim whitespace from the email field
    var trimEmail = email.replace(/^\s*|\s*$/g,"");
    var isComplexPwd = /(?=.*\d)(?=.*[a-z]).{6,}/;

    var isValidPassword = function(pwd) {
      if (pwd.length < 6) {
        return false;
      } else if (pwd !== confirmPassword) {
        return false;
      } else if (!isComplexPwd.test(pwd)){
        return false;
      } else {
        return true;
      }
    };

    var errorMessage = function(pwd) {
      if (pwd.length < 6) {
        return "Password must be at least 6 characters long!";
      } else if (pwd !== confirmPassword) {
        return "Password does not match the confirm password!";
      } else if (!isComplexPwd.test(pwd)){
        return "Must contain at least 1 letter and 1 digit";
      } else {
        return "success";
      }
    };

    // Validate password to create an user
    if (isValidPassword(password)) {
      var accountInfo = {
				email: trimEmail,
				password: password
			};
      Accounts.createUser(accountInfo, function(er) {
				if(er) {
          //template.hasError.set(true);
          //template.errorMessage.set(errorMessage(password));
          // Session.set("errorMessage", errorMessage(password));
					Materialize.toast(er.reason, 5000);
				} else {
          //template.hasError.set(false);
          //template.errorMessage.set("");
          //Session.set("errorMessage", "");
          // auto login and redirect to home page
					FlowRouter.go('home');
				}
			});
      // Accounts.sendVerificationEmail(Meteor.userId());
    } else {
      //template.hasError.set(false);
      //template.errorMessage.set(errorMessage(password));
      // Session.set("errorMessage", errorMessage(password));
      Materialize.toast(errorMessage(password), 5000);
    }
  },
});

/*
Template.Register.helpers({
  errorMessage: function() {
    return Template.instance().errorMessage.get();
    // return Session.get("errorMessage");
  }
});*/

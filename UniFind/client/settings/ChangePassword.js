Template.ChangePassword.events({
  'submit .changePasswordForm'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const oldPassword = target.oldPassword.value;
    const newPassword = target.newPassword.value;
    const confirmNewPassword = target.confirmNewPassword.value;

    var isComplexPwd = /(?=.*\d)(?=.*[a-zA-Z]).{6,}/;

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
        return "New password must be at least 6 characters long!";
      } else if (pwd !== confirmPassword) {
        return "New password does not match the confirm password!";
      } else if (!isComplexPwd.test(pwd)){
        return "Must contain at least 1 letter and 1 digit";
      } else {
        return "success";
      }
    };



    // Change assword
    if (isValidPassword(password)) {
      Accounts.changePassword(oldPassword, newPassword, function(er) {
        if(er) {
					Materialize.toast(er.reason, 5000);
				} else {
          // redirect to home page
          Materialize.toast("You have successfully changed your password!", 5000);
					FlowRouter.go('home');
				}
      });
    } else {
      Materialize.toast(errorMessage(newPassword), 5000);
    }
  },
});

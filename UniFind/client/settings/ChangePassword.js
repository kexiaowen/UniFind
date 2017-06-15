Template.ChangePassword.events({
  'submit .changePasswordForm'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const oldPassword = target.oldPassword.value;
    const newPassword = target.newPassword.value;
    const confirmNewPassword = target.confirmNewPassword.value;

    // Change assword
    if (newPassword === confirmNewPassword && newPassword !== "" && confirmNewPassword !== "") {
      Accounts.changePassword(oldPassword, newPassword, function(er) {
        if(er) {
					Materialize.toast(er.reason, 4000);
				} else {
          // redirect to home page
          Materialize.toast("You have successfully changed your password!", 4000);
					FlowRouter.go('home');
				}
      });
    } else {
      Materialize.toast('New password does not match the confirm new password!', 4000);
    }
  },
});

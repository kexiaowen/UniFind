Template.Register.events({
  'submit .registerForm'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const email = target.email.value;
    const password = target.password.value;
    const confirmPassword = target.confirmPassword.value;

    // Validate password to create an user
    if (password === confirmPassword && password !== "" && confirmPassword !== "") {
      var accountInfo = {
				email: email,
				password: password
			};
      Accounts.createUser(accountInfo, function(er) {
				if(er) {
					Materialize.toast(er.reason, 4000);
				} else {
          // auto login and redirect to home page
					FlowRouter.go('home');
				}
			});
    } else {
      Materialize.toast('Password does not match the confirm password!', 4000);
    }
  },
});

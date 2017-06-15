Template.Login.events({
  'submit .loginForm'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const email = target.email.value;
    const password = target.password.value;
    
    // Login user
		Meteor.loginWithPassword(email, password, (er)=>{
			if(er) {
				Materialize.toast(er.reason, 4000);
			} else {
				//Redirect
				FlowRouter.go('/');
			}
		});
  },
});

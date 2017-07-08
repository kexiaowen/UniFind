/*Accounts.emailTemplates.siteName = "UniFind";
Accounts.emailTemplates.from = "UniFind Admin <orbital.hakunamatata@gmail.com>";
Accounts.emailTemplates.enrollAccount.subject = (user) => {
  return `UniFind - Please confirm your email address.`;
};
// ${user.profile.name}
Accounts.emailTemplates.enrollAccount.text = (user, url) => {
  return 'Thanks for signing up for UniFind!'
    + ' To activate your account, simply click the link below:\n\n'
    + url;
};
Accounts.emailTemplates.resetPassword.from = () => {
  // Overrides the value set in `Accounts.emailTemplates.from` when resetting
  // passwords.
  return 'UniFind Password Reset <orbital.hakunamatata@gmail.com>';
};

Accounts.emailTemplates.verifyEmail = {
   subject() {
      return "Activate your UniFind account!";
   },
   text(user, url) {
      return `Hey ${user}! Verify your e-mail by following this link: ${url}`;
   }
};*/

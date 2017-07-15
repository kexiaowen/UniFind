
/*Accounts.emailTemplates.enrollAccount.subject = (user) => {
  return `UniFind - Please confirm your email address.`;
};
// ${user.profile.name}
Accounts.emailTemplates.enrollAccount.text = (user, url) => {
  return 'Thanks for signing up for UniFind!'
    + ' To activate your account, simply click the link below:\n\n'
    + url;
};*/


if (Meteor.isServer) {
  Meteor.startup(function() {
    // process.env.MAIL_URL='smtp://AKIAJRO3KFGFCJL5PRBQ:AiAy0XnqeLIbreezl1OgIqcJjUvciw+KaLT1BRnVHxmU@email-smtp.us-east-1.amazonaws.com:587';
    //process.env.MAIL_URL='smtp://AKIAJRO3KFGFCJL5PRBQ:AiAy0XnqeLIbreezl1OgIqcJjUvciw+KaLT1BRnVHxmU@email-smtp.us-east-1.amazonaws.com:587';
  });
  Accounts.emailTemplates.siteName = "UniFind";
  Accounts.emailTemplates.from = "UniFind Admin <orbital.hakunamatata@gmail.com>";
  Accounts.emailTemplates.resetPassword.from = () => {
    // Overrides the value set in `Accounts.emailTemplates.from` when resetting
    // passwords.
    return 'UniFind Password Reset <orbital.hakunamatata@gmail.com>';
  };
  Accounts.emailTemplates.verifyEmail.subject = (user) => {
    return `UniFind - Please confirm your email address.`;
  };
  /*Accounts.emailTemplates.verifyEmail = {
     subject() {
        return "UniFind - Please confirm your email address.";
     },
     text(user, url) {
        return `Hey ${user}! Verify your e-mail by following this link: ${url}`;
     }
  };*/
  Accounts.emailTemplates.verifyEmail.text = (user, url) => {
    return 'Thanks for signing up for UniFind!'
      + ' To activate your account, simply click the link below:\n\n'
      + url
      + '\n\n'
      + 'Sincerely,\n'
      + "UniFind Admin";
  };
}

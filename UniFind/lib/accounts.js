// import { Accounts } from 'meteor/accounts-base';


/*Accounts.emailTemplates.enrollAccount.subject = (user) => {
  return `Welcome to Awesome Town, ${user.profile.name}`;
};
Accounts.emailTemplates.enrollAccount.text = (user, url) => {
  return 'You have been selected to participate in building a better future!'
    + ' To activate your account, simply click the link below:\n\n'
    + url;
};*/
/*Accounts.emailTemplates.verifyEmail = {
   subject() {
      return "Activate your account now!";
   },
   text(user, url) {
      return `Hey ${user}! Verify your e-mail by following this link: ${url}`;
   }
};*/
/*
if (Meteor.isServer) {
  Meteor.startup(function() {
    process.env.MAIL_URL= 'smtp://postmaster%40sandboxbb096ba1f93c47c98b9844bc992c56e0.mailgun.org:ec3628bbc1937126ceef45c4ddd2b948@smtp.mailgun.org:587';
    //process.env.MAIL_URL= 'smtp://609592492%40qq.com:xiaowen6094370@smtp.qq.com:587';
    //process.env.MAIL_URL= 'smtps://orbital.hakunamatata:tallandthin@smtp.gmail.com:465';
  });
  Accounts.emailTemplates.siteName = 'UniFind';
  Accounts.emailTemplates.from = 'UniFind Admin <no-reply@unifind.com>';
  Accounts.emailTemplates.resetPassword.from = () => {
    // Overrides the value set in `Accounts.emailTemplates.from` when resetting
    // passwords.
    return 'UniFind Password Reset <no-reply@unifind.com>';
  };
  Accounts.emailTemplates.resetPassword = {
    subject() {
      return "UniFind - Password Reset"
    },
    text(user, url) {
      return 'To reset your password, please click the link below:\n\n'
        + url
        + "\n\n"
        + "Sincerely,\n"
        + "UniFind Admin";
    }
  };
}*/

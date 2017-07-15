/*import validator from 'validator';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Accounts.onCreateUser((options, user) => {
  const newUser = user;

  if (validator.isEmail(options.email)) {
    return newUser;
  }

  throw new Meteor.Error('500', 'Please use a valid email address.');
});*/

const vogels = require('vogels');
const Joi = require('joi');

vogels.AWS.config.update({region: 'us-east-1'});

var Mailbox = vogels.define('Mailbox', {
  hashKey: 'email',

  // add the timestamp attributes (updatedAt, createdAt)
  timestamps: true,

  schema: {
    email: Joi.string().email(),
    wallet: Joi.number()
  },
  tableName: 'maildisco_mailboxes'
});

exports.handler = (event, context, callback) => {
  console.log('createMailbox handler');
  Mailbox.create({email: 'foo@example.com', wallet: 21}, function(err, acc) {
    if (err) {
      console.log('err', err);
    }
    console.log('created account in DynamoDB', acc);
    callback(null, {acc, err});
  });
};

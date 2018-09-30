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
  Mailbox.get('foo@example.com', function(err, acc) {
    callback(null, {acc, err});
  });
};

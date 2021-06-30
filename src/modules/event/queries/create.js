const mongoose = require('mongoose');
const Event = require('../Model');
const message = require('../../utils/messages');

function createEventQuery(values) {
  const _id = values._id || new mongoose.Types.ObjectId();

  const event = new Event({
    _id,
    ...values,
  });

  return event
    .save()
    .then(() => {
      return message.success('Event created', _id);
    })
    .catch((error) => {
      console.log(error)
      return message.fail('Event create error', error);
    });
}

module.exports = createEventQuery;

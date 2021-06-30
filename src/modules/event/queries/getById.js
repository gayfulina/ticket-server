const Event = require('../Model');
const message = require('../../utils/messages');

const eventGetByIdQuery = (eventId) => {
  return Event.findById(eventId)
    .exec()
    .then((doc) => {
      if (doc) {
        return message.success('Event get by id OK', doc);
      } else {
        return message.fail('No Event for provided id');
      }
    })
    .catch((error) => {
      console.log(error)
      return message.fail('Get Event by id ERROR', error);
    });
};

module.exports = eventGetByIdQuery;

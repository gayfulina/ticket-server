const Event = require('../Model');
const message = require('../../utils/messages');
const { get } = require('lodash');

const eventDeleteById = (req, res) => {
  const _id = get(req, 'params.eventId');

  Event.deleteOne({ _id })
    .exec()
    .then((doc) => {
      if (doc.n) {
        res.status(200).json(message.success('Event deleted'));
      } else {
        res.status(400).json(message.fail('Event not found'));
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json(message.fail('Event delete error'));
    });
};

module.exports = eventDeleteById;

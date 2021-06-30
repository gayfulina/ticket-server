const Event = require('../Model');
const message = require('../../utils/messages');
const { get } = require('lodash');

const eventGetById = (req, res) => {
  const eventId = get(req, 'params.eventId');

  Event.findById(eventId)
    .exec()
    .then((doc) => {
      if (doc) {
        res.status(200).json(message.success('Get Event by id ok', doc));
      } else {
        res.status(404).json(message.fail('No event for provided id'));
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json(message.fail('Event get error'));
    });
};

module.exports = eventGetById;

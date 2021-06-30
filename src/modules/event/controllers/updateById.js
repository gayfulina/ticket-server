const Event = require('../Model');
const message = require('../../utils/messages');
const { get } = require('lodash');

async function eventUpdateById(req, res) {
  const eventId = get(req, 'params.eventId');

  Event.updateOne({ _id: eventId }, { $set: req.body }, { runValidators: true })
    .exec()
    .then((doc) => {
      if (doc.n) {
        res.status(200).json(message.success('Event updated'));
      } else {
        res.status(400).json(message.fail('Event not found'));
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json(message.fail('Event update error'));
    });
}

module.exports = eventUpdateById;

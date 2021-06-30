const Event = require('../Model');
const message = require('../../utils/messages');
const { get } = require('lodash');

async function eventAddImage(req, res) {
  const eventId = get(req, 'params.eventId');
  const images = get(req, 'file.transforms', '');
  const originalImageUrl = images.find(({ id }) => id === 'original').location;
  const thumbnailImageUrl = images.find(({ id }) => id === 'thumbnail').location;

  Event.updateOne(
    { _id: eventId },
    { $push: { images: [originalImageUrl, thumbnailImageUrl] } },
    { runValidators: true },
  )
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

module.exports = eventAddImage;

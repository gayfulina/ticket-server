const Base = require('../Model');
const message = require('../../utils/messages');
const { get } = require('lodash');

async function baseUpdateById(req, res) {
  const baseId = get(req, 'params.baseId');
  const userId = get(req, 'userData.userId');

  Base.updateOne({ _id: baseId }, { $set: req.body }, { runValidators: true })
    .exec()
    .then((doc) => {
      if (doc.n) {
        res.status(200).json(message.success('Base updated'));
      } else {
        res.status(400).json(message.fail('Base not found'));
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json(message.fail('Base update error'));
    });
}

module.exports = baseUpdateById;

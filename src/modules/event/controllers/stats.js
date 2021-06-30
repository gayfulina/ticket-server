const Event = require('../Model');
const message = require('../../utils/messages');

const eventStats = async (req, res) => {
  try {
    const totalCount = await Event.countDocuments();

    const result = {
      totalCount,
    };

    res.status(200).json(message.success('Event Stats ok', result));
  } catch (error) {
    console.log(error);
    res.status(400).json(message.fail('Event Stats error'));
  }
};

module.exports = eventStats;

const Order = require('../Model');
const message = require('../../utils/messages');
const { get } = require('lodash');

const orderGetById = (req, res) => {
  const orderId = get(req, 'params.orderId');
  const userId = get(req, 'userData.userId');

  Order.findById(orderId)
    // подтягивает данные из соседних коллекций, аналог SQL JOIN
    // .populate({
    //   path: 'members',
    //   select: 'name links',
    // })
    // .populate({
    //   path: 'lectures',
    //   options: { sort: { date: -1 } },
    //   populate: { path: 'understood', select: 'name' },
    // })
    .exec()
    .then((doc) => {
      if (doc) {
        res.status(200).json(message.success('Get Order by id ok', doc));
      } else {
        res.status(404).json(message.fail('No order for provided id'));
      }
    })
    .catch((error) => {
console.log(error)

      res.status(400).json(message.fail('Order get error'));
    });
};

module.exports = orderGetById;

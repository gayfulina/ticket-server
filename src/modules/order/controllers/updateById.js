const Order = require('../Model');
const message = require('../../utils/messages');
const { get } = require('lodash');

async function orderUpdateById(req, res) {
  const orderId = get(req, 'params.orderId');
  const userId = get(req, 'userData.userId');

  Order.updateOne({ _id: orderId }, { $set: req.body }, { runValidators: true })
    .exec()
    .then((doc) => {
      if (doc.n) {
        res.status(200).json(message.success('Order updated'));
      } else {
        res.status(400).json(message.fail('Order not found'));
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json(message.fail('Order update error'));
    });
}

module.exports = orderUpdateById;

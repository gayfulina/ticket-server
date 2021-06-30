const mongoose = require('mongoose');
const Order = require('../Model');
const message = require('../../utils/messages');

function createOrderQuery(values) {
  const _id = values._id || new mongoose.Types.ObjectId();

  const order = new Order({
    _id,
    ...values,
  });

  return order
    .save()
    .then(() => {
      return message.success('Order created', _id);
    })
    .catch((err) => {
      return message.fail('Order create error', err);
    });
}

module.exports = createOrderQuery;

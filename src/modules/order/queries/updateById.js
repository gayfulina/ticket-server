const Order = require('../Model');
const message = require('../../utils/messages');

const orderUpdateByIdQuery = ({ orderId, values }) => {
  return Order.updateOne({ _id: orderId }, { $set: values }, { runValidators: true })
    .exec()
    .then((doc) => {
      if (doc.n) {
        return message.success('Order updated');
      } else {
        return message.fail('Order not found');
      }
    })
    .catch((error) => {
      return message.fail('Order update error', error);
    });
};

module.exports = orderUpdateByIdQuery;

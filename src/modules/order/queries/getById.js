const Order = require('../Model');
const message = require('../../utils/messages');

const orderGetByIdQuery = (orderId) => {
  return Order.findById(orderId)
    .exec()
    .then((doc) => {
      if (doc) {
        return message.success('Order get by id OK', doc);
      } else {
        return message.fail('No Order for provided id');
      }
    })
    .catch((err) => {
      return message.fail('Get Order by id ERROR', err);
    });
};

module.exports = orderGetByIdQuery;

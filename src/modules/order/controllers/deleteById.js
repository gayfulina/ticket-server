const Order = require('../Model');
const message = require('../../utils/messages');
const { get } = require('lodash');

const orderDeleteById = (req, res) => {
  // читаем id из параметров URL запроса
  const _id = get(req, 'params.orderId');

  // Получаем id текущего пользователя
  const userId = get(req, 'userData.userId');

  Order.deleteOne({ _id })
    .exec()
    .then((doc) => {
      if (doc.n) {
        res.status(200).json(message.success('Order deleted'));
      } else {
        res.status(400).json(message.fail('Order not found'));
      }
    })
    .catch((error) => {
      // Формируем, записываем данные события для аналитики
console.log(error)
      res.status(400).json(message.fail('Order delete error'));
    });
};

module.exports = orderDeleteById;

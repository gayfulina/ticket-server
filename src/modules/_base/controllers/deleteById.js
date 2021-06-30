const Base = require('../Model');
const message = require('../../utils/messages');
const { get } = require('lodash');

const baseDeleteById = (req, res) => {
  // читаем id из параметров URL запроса
  const _id = get(req, 'params.baseId');

  // Получаем id текущего пользователя
  const userId = get(req, 'userData.userId');

  Base.deleteOne({ _id })
    .exec()
    .then((doc) => {
      if (doc.n) {
        res.status(200).json(message.success('Base deleted'));
      } else {
        res.status(400).json(message.fail('Base not found'));
      }
    })
    .catch((error) => {
      // Формируем, записываем данные события для аналитики
console.log(error)
      res.status(400).json(message.fail('Base delete error'));
    });
};

module.exports = baseDeleteById;

const mongoose = require('mongoose');
//import Order from '../Model';
const message = require('../../utils/messages');
const { get } = require('lodash');
const createOrderQuery = require('../queries/create');

async function orderCreate(req, res) {
  // Создаем id материала который будет создан
  const _id = new mongoose.Types.ObjectId();

  // Получаем id текущего пользователя
  const userId = get(req, 'userData.userId');

  // Читаем данные из запроса
  const name = get(req, 'body.name');
  const description = get(req, 'body.description');

  const createOrderQueryResult = await createOrderQuery({
    _id,
    name,
    description,
    owner: userId,
  });

  if (createOrderQueryResult.success) {
    res.status(200).json(createOrderQueryResult);
  } else {
    console.log(error);

    res.status(400).json(message.fail('Order create error'));
  }
}

module.exports = orderCreate;

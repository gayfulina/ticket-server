const mongoose = require('mongoose');
//import Base from '../Model';
const message = require('../../utils/messages');
const { get } = require('lodash');
const createBaseQuery = require('../queries/create');

async function baseCreate(req, res) {
  // Создаем id материала который будет создан
  const _id = new mongoose.Types.ObjectId();

  // Получаем id текущего пользователя
  const userId = get(req, 'userData.userId');

  // Читаем данные из запроса
  const name = get(req, 'body.name');
  const description = get(req, 'body.description');

  const createBaseQueryResult = await createBaseQuery({
    _id,
    name,
    description,
    owner: userId,
  });

  if (createBaseQueryResult.success) {
    res.status(200).json(createBaseQueryResult);
  } else {
    console.log(error);

    res.status(400).json(message.fail('Base create error'));
  }
}

module.exports = baseCreate;

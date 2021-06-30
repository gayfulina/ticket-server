const message = require('../utils/messages');
const faker = require('faker');
const Event = require('../event/Model');
const mongoose = require('mongoose');
const { get } = require('lodash');

const fakeGeneratorEvent = (req, res) => {
  const count = get(req, 'params.count', 100);

  for (let i = 0; i < count; i++) {
    const eventFields = {
      _id: new mongoose.Types.ObjectId(),
      description: faker.commerce.productDescription(),
      name: faker.name.findName(),
      price: faker.commerce.price(),
      image: faker.image.avatar(),
    };

    const event = new Event(eventFields);

    event
      .save()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  }
  res.status(200).json(message.success('Events have been created'));
};


module.exports = fakeGeneratorEvent;

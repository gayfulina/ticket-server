const mongoose = require('mongoose');

const Schema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,

    name: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: false,
    },

    price: {
      type: Number,
      required: false,
    },

    description: {
      type: String,
      required: false,
    },

    images: [{ type: String }],
  },

  { timestamps: {}, versionKey: false },
);

module.exports = mongoose.model('Event', Schema);

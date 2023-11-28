const mongoose = require('mongoose');
const validator = require('validator');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: {
      value: true,
      message: 'Поле country явялется обязательным',
    },
  },
  director: {
    type: String,
    required: {
      value: true,
      message: 'Поле director явялется обязательным',
    },
  },
  duration: {
    type: Number,
    required: {
      value: true,
      message: 'Поле duration явялется обязательным',
    },
  },
  year: {
    type: String,
    required: {
      value: true,
      message: 'Поле year явялется обязательным',
    },
  },
  description: {
    type: String,
    required: {
      value: true,
      message: 'Поле description явялется обязательным',
    },
  },
  image: {
    type: String,
    required: {
      value: true,
      message: 'Поле image явялется обязательным',
    },
    validate: {
      validator: (v) => validator.isURL(v),
      message: 'Некорректная ссылка',
    },
  },
  trailerLink: {
    type: String,
    required: {
      value: true,
      message: 'Поле trailer link явялется обязательным',
    },
    validate: {
      validator: (v) => validator.isURL(v),
      message: 'Некорректная ссылка',
    },
  },
  thumbnail: {
    type: String,
    required: {
      value: true,
      message: 'Поле явялется обязательным',
    },
    validate: {
      validator: (v) => validator.isURL(v),
      message: 'Некорректная ссылка',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: {
      value: true,
      message: 'Поле _id пользователя явялется обязательным',
    },
  },
  movieId: {
    type: Number,
    required: {
      value: true,
      message: 'Поле id фмльма явялется обязательным',
    },
  },
  nameRU: {
    type: String,
    required: {
      value: true,
      message: 'Поле название на русском явялется обязательным',
    },
  },
  nameEN: {
    type: String,
    required: {
      value: true,
      message: 'Поле название на английском явялется обязательным',
    },
  },
}, { versionKey: false });

module.exports = mongoose.model('movie', movieSchema);

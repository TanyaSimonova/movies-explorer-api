const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: {
      value: true,
      message: 'Поле name явялется обязательным',
    },
    minlength: [2, 'Минимальная длина "name" - 2 символа'],
    maxlength: [30, 'Максимальная длина "name" - 30 символов'],
  },
  email: {
    type: String,
    unique: true,
    required: {
      value: true,
      message: 'Поле email явялется обязательным',
    },
    validate: {
      validator: (v) => validator.isEmail(v),
      message: 'Некорректный формат почты',
    },
  },
  password: {
    type: String,
    required: {
      value: true,
      message: 'Поле password явялется обязательным',
    },
    select: false,
  },
}, { versionKey: false });

module.exports = mongoose.model('user', userSchema);

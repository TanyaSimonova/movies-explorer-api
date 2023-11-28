const router = require('express').Router();
const { celebrate, Joi, Segments } = require('celebrate');
const { getProfile, updateUser } = require('../controllers/users');

router.get('/users/me', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(true),
}), getProfile);

router.patch('/users/me', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(true),
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().email(),
  }),
}), updateUser);

module.exports = router;

const router = require('express').Router();
const { celebrate, Joi, Segments } = require('celebrate');
const {
  getMovies,
  createMovie,
  deleteMovieById,
} = require('../controllers/movies');
const REGEX_URL = require('../utils/constants');

router.post('/movies', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(true),
  [Segments.BODY]: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().pattern(REGEX_URL).required(),
    trailerLink: Joi.string().pattern(REGEX_URL).required(),
    thumbnail: Joi.string().pattern(REGEX_URL).required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
    movieId: Joi.number().integer().required(),
  }),
}), createMovie);

router.delete('/movies/:movieId', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(true),
  [Segments.PARAMS]: Joi.object().keys({
    movieId: Joi.string().alphanum().min(24).max(24)
      .hex()
      .required(),
  }),
}), deleteMovieById);

router.get('/movies', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(true),
}), getMovies);

module.exports = router;

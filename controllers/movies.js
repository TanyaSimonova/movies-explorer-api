const mongoose = require('mongoose');
const movieModel = require('../models/movie');
const NoRights = require('../errors/NoRights');
const NotFound = require('../errors/NotFound');
const NotValid = require('../errors/NotValid');

// создание фильма
const createMovie = (req, res, next) => {
  const {
    country, director, duration, year, description, image,
    trailerLink, nameRU, nameEN, thumbnail, movieId,
  } = req.body;
  return movieModel.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
    owner: req.user._id,
  })
    .then((movie) => {
      res.status(201).send(movie);
    })
    .catch((e) => {
      if (e instanceof mongoose.Error.ValidationError) {
        return next(new NotValid('Invalid data'));
      }
      return next(e);
    });
};

// фильмы пользователя
const getMovies = (req, res, next) => movieModel.find({ owner: req.user._id })
  .then((r) => res.status(200).send(r))
  .catch(next);

// удаление фильма пользователя
const deleteMovieById = async (req, res, next) => {
  try {
    const { movieId } = req.params;
    const movie = await movieModel.findById(movieId).orFail(new NotFound('Movie not found'));

    if (req.user._id !== movie.owner.toString()) {
      return next(new NoRights('No rights to perform the operation'));
    }
    await movieModel.deleteOne(movie._id);
    return res.status(200).send({ movie, message: 'Successfully deleted' });
  } catch (e) {
    if (e instanceof mongoose.Error.CastError) {
      return next(new NotValid('Invalid data'));
    }
    return next(e);
  }
};

module.exports = {
  getMovies,
  createMovie,
  deleteMovieById,
};

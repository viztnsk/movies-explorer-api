const Movie = require('../models/movies');
const NotFoundError = require('../errors/not-found-error');
const BadRequestError = require('../errors/bad-request-error');
const ForbiddenError = require('../errors/forbidden-error');

const getMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((movies) => res.send(movies))
    .catch(next);
};

const createMovie = (req, res, next) => {
  const owner = req.user._id;
  Movie.create({ ...req.body, owner })
    .then((movie) => {
      res.send(movie);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError());
      } else {
        next(err);
      }
    });
};

const deleteMovie = (req, res, next) => {
  Movie.findById(req.params._id)
    .orFail(() => {
      throw new NotFoundError();
    })
    .then((movie) => {
      const currentUser = req.user._id;
      const cardOwner = movie.owner._id.toString();
      if (currentUser === cardOwner) {
        Movie.findByIdAndRemove(req.params._id)
          .orFail(() => {
            throw new NotFoundError();
          })
          .then((deletedMovie) => {
            res.send(deletedMovie);
          });
      } else {
        throw new ForbiddenError();
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError());
      } else {
        next(err);
      }
    });
};

module.exports = { getMovies, createMovie, deleteMovie };

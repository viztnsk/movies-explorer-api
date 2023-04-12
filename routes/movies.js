const movieRouter = require('express').Router();
const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');
const { createMovieValidation, movieIdValidation } = require('../middlewares/validation');

movieRouter.get('/', getMovies);
movieRouter.post('/', createMovieValidation, createMovie);
movieRouter.delete('/:_id', movieIdValidation, deleteMovie);

module.exports = movieRouter;

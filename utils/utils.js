const userResFormat = (user) => ({
  name: user.name,
  email: user.email,
  _id: user._id.toString(),
});

const movieResFormat = (movie) => ({
  country: movie.country,
  director: movie.director,
  duration: movie.duration,
  year: movie.year,
  description: movie.description,
  image: movie.image,
  trailer: movie.trailer,
  nameRU: movie.nameRU,
  nameEN: movie.nameEn,
  thumbnail: movie.thumbnail,
  movieId: movie.movieId,
});

const LINK_EXP = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/;

module.exports = { userResFormat, movieResFormat, LINK_EXP };

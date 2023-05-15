const allowedCors = [
  'http://viztnsk.movies.nomoredomains.monster/',
  'https://viztnsk.movies.nomoredomains.monster/',
  'http://api.viztnsk.movies.nomoredomains.monster/',
  'https://api.viztnsk.movies.nomoredomains.monster/',
  'http://localhost:3000',
  'https://localhost:3000',
  'http://localhost:3001',
  'https://localhost:3001',
];

const corsOptions = {
  origin: allowedCors,
  optionsSuccessStatus: 200,
  credentials: false,
  preflightContinue: false,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

module.exports = corsOptions;

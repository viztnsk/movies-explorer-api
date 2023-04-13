require('dotenv').config({ path: './config.js' });
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
const { limiter } = require('./middlewares/limiter');
const router = require('./routes/index');
const { PORT, DB_ADDRESS } = require('./config');
const { requestLogger } = require('./middlewares/logger');

const app = express();

mongoose.set('strictQuery', false);
mongoose.connect(DB_ADDRESS);

app.use(requestLogger);
app.use(limiter);
app.use('*', cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

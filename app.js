require('dotenv').config({ path: './config.js' });
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { limiter } = require('./middlewares/limiter');
const router = require('./routes/index');
const { PORT, DB_ADDRESS } = require('./config');
const { requestLogger } = require('./middlewares/logger');
const corsOptions = require('./middlewares/cors');

const app = express();

app.use(cors(corsOptions));
app.use(helmet());

mongoose.set('strictQuery', false);
mongoose.connect(DB_ADDRESS);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(requestLogger);
app.use(limiter);
app.use('/', router);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

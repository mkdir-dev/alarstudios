require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { errors } = require('celebrate');

const router = require('./routes/index');

const { handleErr } = require('./middlewares/handleErr');
const { URL_DB, SETUP_DB } = require('./utils/constants');

const { PORT = 4000 } = process.env;
const app = express();

mongoose.connect(URL_DB, SETUP_DB);

app.use('/', express.json());
app.use(cors());
app.use(router);
app.use(errors());
app.use(handleErr);

app.listen(PORT);
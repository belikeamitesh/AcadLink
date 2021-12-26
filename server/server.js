const express = require('express');
const cors = require('cors');

const routes = require('./routes');
const { central, notFound } = require('./controllers/errors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/public/images', express.static('images'));

app.use('/api', routes);
app.use(central);
app.use(notFound);

module.exports = app;

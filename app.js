// DEPENDENCIES (Or Plugins--------***** section in Anatomy of an Express Server
require('dotenv').config();

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config/db');

// Importing Route files
const calcroute = require('./routes/calcroute');
const { exists } = require('./models/entries');

// INSTANTIATIONS----------------
const app = express();

// SetUp Database Connections
mongoose.connect(config.database, { useNewUrlParser: true });
mongoose.connect(config.database, { useNewUrlParser: true });
const db = mongoose.connection;

// Check connection
db.once('open', () => {
  console.log('Connected to MongoDB now');
});

// Check for db errors
db.on('error', (err) => {
  console.error(err);
});

// CONFIGURATIONS-------------------
// eslint-disable-next-line no-underscore-dangle
app.engine('pug', require('pug').__express);


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES---------------------------
app.use('/', calcroute);

app.get('*', (req, res) => {
  res.send("404! Sorry the page you're looking for does not exists.");
});
  res.send("404! Sorry the page you're looking for does not exists.");
});

// BOOTSTRAPPING SERVER--------------***section in Anatomy of an Express Server

app.listen(3800, () => console.log('Elders are listening on port 3800'));

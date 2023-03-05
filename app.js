// DEPENDENCIES (Or Plugins--------***** section in Anatomy of an Express Server

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
// const passport = require('passport');
const dotenv = require('dotenv');

// Environment variables
dotenv.config();

// Express session
const expressSession = require('express-session')({
  secret: 'hermit#9',
  resave: false, // don't save session if unmodified
  saveUninitialized: false, // don't create session until something is stored
});

// DB config file
// const config = require('./config/db');

// Import the User Model or Schema
const ClientRegister = require('./models/entries');

// Importing Route files
const calcroute = require('./routes/calcroute');
const { exists } = require('./models/entries');

// INSTANTIATIONS----------------****** section in Anatomy of an Express Server
const app = express();

// SetUp Database Connections
mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true });
const db = mongoose.connection;

// Check connection
db.once('open', () => {
  console.log('Connected to MongoDB now');
});

// Check for db errors
db.on('error', (err) => {
  console.error(err);
});

// CONFIGURATIONS-------------------**** section in Anatomy of an Express Server
app.engine('pug', require('pug').__express);

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession);

// ROUTES---------------------------**** section in Anatomy of an Express Server
app.use('/', calcroute);

app.get('*', (req, res) => {
  res.send("404! Sorry the page you're looking for does not exists.");
});

// BOOTSTRAPPING SERVER--------------***section in Anatomy of an Express Server

app.listen(process.env.PORT, () => console.log('Elders are listening on port 8080'));

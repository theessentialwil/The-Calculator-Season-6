const express = require('express');
const logger = require('../logger');

const router = express.Router();
// const { get } = require('mongoose');

// Importing the User Model or Schema
const TransactionEntry = require('../models/entries');

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/index', (req, res) => {
  res.render('index');
});

router.post('/', async (req, res) => {
  try {
    const transaction = new TransactionEntry(req.body);
    await transaction.save();
    res.redirect('/');
    logger.info('Events Info: Saved calculation to DB');
  } catch (error) {
    logger.error('Events Error: Unable to save calculation.');
    res.status(400).send('Error!');
  }
});

module.exports = router;

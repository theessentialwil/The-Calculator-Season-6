const express = require('express');
const logger = require('../logger');

const router = express.Router();
// const { get } = require('mongoose');

// Importing the User Model or Schema
const transactionEntry = require('../models/entries');

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/index', (req, res) => {
  res.render('index');
});

router.post('/', async (req, res) => {
  try {
    const transaction = new transactionEntry(req.body);
    await transaction.save();
    logger.info('Info: New calculation saved');
    res.redirect('/');
  } catch (error) {
    res.status(400).send('Sorry we were unable to save the transaction.');
    logger.error('400 Calculation not saved');
  }
});

module.exports = router;

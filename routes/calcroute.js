const express = require('express');

const router = express.Router();

const { get } = require('mongoose');

// Importing the User Model or Schema
const transactionEntry = require('../models/entries');

// router.get('/', (req, res) => {
//   res.render('index');
// });

router.get('/index', (req, res) => {
  res.render('index');
});

router.post('/', async (req, res) => {
  try {
    const transaction = new transactionEntry(req.body);
    await transaction.save();
    res.redirect('/');
  } catch (error) {
    res.status(400).send('Sorry we were unable to save the transaction.');
    // console.log(error);
  }
});

// Return History
router.get('/', async (req, res) => {
  try {
    const results = await transactionEntry.find().sort({ $natural: -1 }).limit(5);
    res.render('index', { calculations: results });
    console.log(results);
  } catch (error) {
    res.status(400).send('Sorry there is no history matching your request');
    console.log(error);
  }
});

module.exports = router;

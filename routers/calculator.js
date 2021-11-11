const express = require('express');
const router = express.Router();
const calculator_conroller = require('../controllers/calculatorConroller');

router.post(
  '/calculate',
  calculator_conroller.calculate,
);
module.exports = router;

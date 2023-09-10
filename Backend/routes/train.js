const express = require('express');
const router = express.Router();
const trainsController = require('../controllers/trainsController');

router.get('/', trainsController.getAllTrains);
router.get('/:trainNumber', trainsController.getTrainByNumber);

module.exports = router;

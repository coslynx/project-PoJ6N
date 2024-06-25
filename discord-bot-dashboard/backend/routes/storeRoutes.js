const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

router.get('/items', storeController.getItems);
router.post('/purchase', storeController.purchaseItem);

module.exports = router;
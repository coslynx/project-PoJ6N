const express = require('express');
const router = express.Router();
const marketPlaceController = require('../controllers/marketPlaceController');

router.get('/items', marketPlaceController.getAllItems);
router.get('/items/:id', marketPlaceController.getItemById);
router.post('/items', marketPlaceController.createItem);
router.put('/items/:id', marketPlaceController.updateItem);
router.delete('/items/:id', marketPlaceController.deleteItem);

module.exports = router;
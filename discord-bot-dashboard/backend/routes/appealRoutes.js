const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/authMiddleware');
const { getAllAppeals, getAppealById, createAppeal, updateAppeal, deleteAppeal } = require('../controllers/appealController');

router.get('/appeals', verifyToken, getAllAppeals);
router.get('/appeals/:id', verifyToken, getAppealById);
router.post('/appeals', verifyToken, createAppeal);
router.put('/appeals/:id', verifyToken, updateAppeal);
router.delete('/appeals/:id', verifyToken, deleteAppeal);

module.exports = router;
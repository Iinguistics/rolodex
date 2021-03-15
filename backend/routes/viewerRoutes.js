const express = require('express');
const router = express.Router();
const { createViewer } = require('../controllers/viewerController');
const { protect, admin } = require('../middleware/authMiddleWare');





router.post("/", protect, createViewer);





module.exports = router;
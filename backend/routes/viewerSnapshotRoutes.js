const express = require('express');
const router = express.Router();
const { createSnapshot } = require('../controllers/viewersSnapshotController');
const { protect, admin } = require('../middleware/authMiddleWare');




//router.get("/", protect, getViewers);
router.post("/",  protect, createSnapshot);




module.exports = router;
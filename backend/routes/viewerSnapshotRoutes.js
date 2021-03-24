const express = require('express');
const router = express.Router();
const { createSnapshot, getSnapshots } = require('../controllers/viewersSnapshotController');
const { protect, admin } = require('../middleware/authMiddleWare');




router.get("/", protect, getSnapshots);
router.post("/",  protect, createSnapshot);




module.exports = router;
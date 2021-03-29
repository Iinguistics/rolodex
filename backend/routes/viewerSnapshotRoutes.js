const express = require('express');
const router = express.Router();
const { createSnapshot, getSnapshots, deleteSnapshot } = require('../controllers/viewersSnapshotController');
const { protect, admin } = require('../middleware/authMiddleWare');




router.get("/", protect, getSnapshots);
router.post("/",  protect, createSnapshot);
router.delete("/",  protect, deleteSnapshot);



module.exports = router;
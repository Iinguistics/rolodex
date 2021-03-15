const express = require('express');
const router = express.Router();
const { createViewer, getViewerById } = require('../controllers/viewerController');
const { protect, admin } = require('../middleware/authMiddleWare');





router.post("/", protect, createViewer);
router.get("/:id", protect, getViewerById);




module.exports = router;
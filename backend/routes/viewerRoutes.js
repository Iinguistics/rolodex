const express = require('express');
const router = express.Router();
const { createViewer, getViewerById, editViewer } = require('../controllers/viewerController');
const { protect, admin } = require('../middleware/authMiddleWare');





router.post("/", protect, createViewer);
router.get("/:id", protect, getViewerById);
router.put("/edit/:id", protect, editViewer);



module.exports = router;
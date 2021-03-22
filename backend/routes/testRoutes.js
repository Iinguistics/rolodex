const express = require('express');
const router = express.Router();
const { test }  = require('../controllers/testController');
const { protect, admin } = require('../middleware/authMiddleWare');




//router.get("/", protect, getViewers);
router.get("/",  test);




module.exports = router;
const express = require('express');
const router = express.Router();
const { test, fetchToken }  = require('../controllers/testController');
const { protect, admin } = require('../middleware/authMiddleWare');




//router.get("/", protect, getViewers);
router.post("/",  test);

router.get("/token", fetchToken)


module.exports = router;
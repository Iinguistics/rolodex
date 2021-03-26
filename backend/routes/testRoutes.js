const express = require('express');
const router = express.Router();
const { test, fetchToken, fetchTwitchUser }  = require('../controllers/testController');
const { protect, admin } = require('../middleware/authMiddleWare');




router.get("/",  fetchTwitchUser);

router.post("/",  test);

router.get("/token", fetchToken)


module.exports = router;
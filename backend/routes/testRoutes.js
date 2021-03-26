const express = require('express');
const router = express.Router();
const { test, fetchToken, fetchMoreTwitchUserData }  = require('../controllers/testController');
const { protect, admin } = require('../middleware/authMiddleWare');




router.post("/moredata",  fetchMoreTwitchUserData);

router.post("/",  test);

router.get("/token", fetchToken)


module.exports = router;
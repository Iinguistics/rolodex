const express = require('express');
const router = express.Router();
const { fetchLiveData, fetchToken, fetchGeneralData }  = require('../controllers/twitchDataController');
const { protect, admin } = require('../middleware/authMiddleWare');




router.post("/generaldata",fetchGeneralData);

router.post("/livedata",fetchLiveData);

router.get("/token",fetchToken)


module.exports = router;
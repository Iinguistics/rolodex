const express = require('express');
const router = express.Router();
const { authUser, getUserProfile, registerUser, updateUserProfile, getAllUsers, deleteUser, getUserProfileEdit, editUserProfile } = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleWare');


router.post("/register", registerUser);
router.post("/login", authUser);
router.get("/profile", protect, getUserProfile);
router.put("/profile", protect, updateUserProfile);
router.delete('/remove/:id', protect, deleteUser);

router.get("/profile/edit/:id", protect,admin, getUserProfileEdit);
router.put("/profile/edit/:id", protect,admin, editUserProfile);
router.get('/',protect,admin, getAllUsers);



module.exports = router;
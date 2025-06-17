const express = require('express');
const { registerUser, loginUser, updateUser } = require('../controllers/userController');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })

router.post('/register', upload.single('prd_image'), registerUser);
router.post("/login", loginUser);
router.put("/:id", updateUser)

module.exports = router;
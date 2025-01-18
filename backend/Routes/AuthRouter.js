const { signup, login, logout } = require('../Controllers/AuthController');
const { signupValidation, loginValidation ,authenticate} = require('../Middlewares/AuthValidation');
const { getProfile, updateProfile } = require('../Controllers/ProfileControllers');

const router = require('express').Router();


router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);
router.post('/logout', logout);
router.get('/profile', authenticate, getProfile); // Get profile
router.put('/profile', authenticate, updateProfile); // Update profile
module.exports = router;


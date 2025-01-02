const express = require('express');


const router = express.Router();


//path to Authentication Controller
const authneticationController = require('../controllers/authentication_controller');


//Api Routes
router.post('/register', authneticationController.registerUser)
router.post('/login', authneticationController.login);
router.get('/return-user', authneticationController.returnUser);


module.exports = router;
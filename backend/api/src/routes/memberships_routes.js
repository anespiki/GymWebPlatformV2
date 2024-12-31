const express = require('express');


const router = express.Router();


//path to Authentication Controller
const membershipController = require('../controllers/memberships_controller');


//Api Routes
router.get('/return-memberships', membershipController.returnMemberships);


module.exports = router;
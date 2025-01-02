const express = require('express');


const router = express.Router();


//path to Authentication Controller
const membershipController = require('../controllers/memberships_controller');


//Api Routes
router.get('/return-memberships', membershipController.returnMemberships);
router.get('/return-user-membership', membershipController.returnUserMembership);
router.post('/add-membership', membershipController.addMembership);
router.post('/cancel-membership', membershipController.cancelMembership);


module.exports = router;
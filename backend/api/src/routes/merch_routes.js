const express = require('express');


const router = express.Router();


//path to Authentication Controller
const merchController = require('../controllers/merch_controller');


//Api Routes
router.get('/return-merch', merchController.returnMerch);



module.exports = router;
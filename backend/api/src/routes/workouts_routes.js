const express = require('express');


const router = express.Router();


//path to Authentication Controller
const workoutsRoutes = require('../controllers/workouts_controller');


//Api Routes
router.get('/return-workouts', workoutsRoutes.returnWorkouts);


module.exports = router;
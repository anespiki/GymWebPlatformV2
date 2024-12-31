// src/index.js

const express = require('express');
const cors = require('cors');


const app = express();


//Configuration of CORS
//We need cors to ensure we can access backend from our trusted domains
const corsOptions = {
    origin: 'http://localhost:3000', // Trusted Domain
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specifying allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specifying allowed headers
};

app.use(cors(corsOptions));

// Middleware
app.use(express.json());

// Routes
const authenticationRoutes = require('./routes/authentication_routes');
const membershipsRoutes = require('./routes/memberships_routes');
const merchRoutes = require('./routes/merch_routes');
const workoutsRoutes = require('./routes/workouts_routes');




app.use('/api/authentication', authenticationRoutes);
app.use('/api/memberships', membershipsRoutes);
app.use('/api/merch', merchRoutes);
app.use('/api/workouts', workoutsRoutes);


const PORT = process.env.PORT || 5001;


app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});

const workouts = [
    {
        'title': 'Monday - Full Body Workout',
        'exercises': [
            "Push-ups: 3 sets of 12 reps",
            "Squats: 3 sets of 15 reps",
            "Plank: 3 sets of 30 seconds",
            "Lunges: 3 sets of 12 reps per leg",
        ],

    },
    {
        'title': 'Tuesday - Upper Body',
        'exercises': [
            "Bicep Curls: 3 sets of 12 reps",
            "Tricep Dips: 3 sets of 12 reps",
            "Shoulder Press: 3 sets of 12 reps",
            "Chest Press: 3 sets of 12 reps",
        ],

    },
    {
        'title': 'Wednesday - Cardio',
        'exercises': [
            "Running: 30 minutes at moderate pace",
            "Jumping Jacks: 3 sets of 30 reps",
            "Mountain Climbers: 3 sets of 30 seconds",
            "Burpees: 3 sets of 10 reps",
        ],

    },
    {
        'title': 'Thursday - Lower Body',
        'exercises': [
            "Deadlifts: 3 sets of 12 reps",
            "Leg Press: 3 sets of 12 reps",
            "Hamstring Curls: 3 sets of 12 reps",
            "Glute Bridges: 3 sets of 12 reps",
        ],

    },
    {
        'title': 'Friday - Core & Abs',
        'exercises': [
            "Crunches: 3 sets of 15 reps",
            "Leg Raises: 3 sets of 12 reps",
            "Russian Twists: 3 sets of 20 reps",
            "Plank: 3 sets of 1 minute",
        ],

    },
    {
        'title': 'Saturday - Active Recovery',
        'exercises': [
            "Yoga: 30 minutes",
            "Stretching: 20 minutes",
            "Foam Rolling: 15 minutes",
        ],

    }, {
        'title': 'Sunday - Rest',
        'exercises': [
            "Rest and recovery day",
        ],

    },
];


//Method to return list of workouts
exports.returnWorkouts = async (req, res) => {
    try {

        res.status(200).json({
            "workouts": workouts
        });

    }
    catch (e) {
        console.error("There was error while returning Memberships" + e);
    }
}
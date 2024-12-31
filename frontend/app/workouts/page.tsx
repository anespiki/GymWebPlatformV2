"use client"

import './page.css'; // Import the CSS for styling
import { useState, useEffect } from 'react';
import axios from 'axios';



//Creating Workout Object that can have multiple exercises
type Workout = {
  title: string;
  exercises: string[];
};

export default function WorkoutsPage() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    //Calling Right Api Route to return Workouts and that saving them to the variable
    //Workouts 
    axios
      .get<{ workouts: Workout[] }>("http://localhost:5001/api/workouts/return-workouts")
      .then((response) => setWorkouts(response.data.workouts))
      .catch((error) => console.error("Error fetching workouts:", error));
  }, []);

  return (
    <div className="workouts-background">
      <div className="workout-plan">
        <h2 className="text-3xl font-bold text-white mb-6">Your Workout Plan by Our Chief Fitness Coach</h2>
        
        <div className="days">
          {workouts.map((workout, index) => (
            <div className="day" key={index}>
              <h3 className="text-xl font-semibold text-white">{workout.title}</h3>
              <ul className="text-white">
                {workout.exercises.map((exercise: string, idx: number) => (
                  <li key={idx}>{exercise}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

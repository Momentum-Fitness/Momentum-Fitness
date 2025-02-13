// import React from 'react';

// export default function Shoulders() {
//     return (
//         <div className="Chest">
//             <h1 align="center">
//             Shoulders: 
//             </h1>
//             <p align="center">
//             The shoulders are made up of the deltoid muscles These muscles are crucial for upper body strength, stability, and mobility. 
// The deltoid has three parts:

// Anterior (Front): Used for pushing and lifting movements.
// Lateral (Side): Creates width and roundness in the shoulders.
// Posterior (Rear): Important for pulling motions and posture.


// There are 3 types of Shoulder exercises to focus on Overhead press /
// Lateral head isolation /and rear head isolation 

// 2 workouts a week max because these workouts can be hard to recover from


//             </p>

//             <img
//                 src="https://cdn.britannica.com/36/113036-050-913798F2/Muscles-shoulder.jpg"
//                 style={{ width: '100%', height: 'auto' }}
//             />
//         </div>


//     );
// }

import { useState } from "react";

export default function Shoulders() {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // State for tracking workout data
  const [workouts, setWorkouts] = useState(
    daysOfWeek.map((day) => ({
      day,
      entries: Array(6).fill({ date: "", activity: "", time: "", distance: "", sets: "", reps: "", weight: "" })
    }))
  );

  // Handle input changes
  const handleChange = (dayIndex, rowIndex, field, value) => {
    const updatedWorkouts = [...workouts];
    updatedWorkouts[dayIndex].entries[rowIndex] = {
      ...updatedWorkouts[dayIndex].entries[rowIndex],
      [field]: value
    };
    setWorkouts(updatedWorkouts);
  };

  return (
    <div className="p-6">
      <h1 className="text-center text-3xl font-bold">Shoulders</h1>
      <p className="text-center mt-4 max-w-2xl mx-auto text-gray-700">
        The shoulders are composed of the deltoid muscles, which are crucial for upper body strength, stability, and mobility.
        <br /><br />
        The deltoid has three parts:
        <br />
        <strong>Anterior (Front):</strong> Used for pushing and lifting movements.
        <br />
        <strong>Lateral (Side):</strong> Creates width and roundness in the shoulders.
        <br />
        <strong>Posterior (Rear):</strong> Important for pulling motions and posture.
        <br /><br />
        Focus on three types of shoulder exercises:
        <br />
        <strong>Overhead Press:</strong> Barbell or dumbbell shoulder press.
        <br />
        <strong>Lateral Head Isolation:</strong> Lateral raises, upright rows.
        <br />
        <strong>Rear Head Isolation:</strong> Reverse fly, face pulls.
        <br /><br />
        Recommended: 2 workouts per week max for optimal recovery.
      </p>
      <img
        src="https://cdn.britannica.com/36/113036-050-913798F2/Muscles-shoulder.jpg"
        alt="Shoulder Workout"
        className="mx-auto mt-4 rounded-lg shadow-lg"
        style={{ width: '100%', maxWidth: '500px', height: 'auto' }}
      />

      {/* Workout Tracker Section */}
      <h2 className="text-center text-2xl font-bold mt-8 mb-4">Workout Tracker</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Day</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Activity</th>
              <th className="border p-2">Time (min)</th>
              <th className="border p-2">Distance (km/mi)</th>
              <th className="border p-2">Sets</th>
              <th className="border p-2">Reps</th>
              <th className="border p-2">Weight (kg/lbs)</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((day, dayIndex) =>
              day.entries.map((entry, rowIndex) => (
                <tr key={`${dayIndex}-${rowIndex}`} className="border">
                  {rowIndex === 0 && (
                    <td className="border p-2 text-center font-bold bg-gray-100" rowSpan="6">
                      {day.day}
                    </td>
                  )}
                  <td className="border p-2">
                    <input type="date" className="w-full p-1 border rounded" value={entry.date} 
                      onChange={(e) => handleChange(dayIndex, rowIndex, "date", e.target.value)} />
                  </td>
                  <td className="border p-2">
                    <input type="text" className="w-full p-1 border rounded" placeholder="Workout name"
                      value={entry.activity} onChange={(e) => handleChange(dayIndex, rowIndex, "activity", e.target.value)} />
                  </td>
                  <td className="border p-2">
                    <input type="number" className="w-full p-1 border rounded" placeholder="Minutes"
                      value={entry.time} onChange={(e) => handleChange(dayIndex, rowIndex, "time", e.target.value)} />
                  </td>
                  <td className="border p-2">
                    <input type="number" className="w-full p-1 border rounded" placeholder="Distance"
                      value={entry.distance} onChange={(e) => handleChange(dayIndex, rowIndex, "distance", e.target.value)} />
                  </td>
                  <td className="border p-2">
                    <input type="number" className="w-full p-1 border rounded" placeholder="Sets"
                      value={entry.sets} onChange={(e) => handleChange(dayIndex, rowIndex, "sets", e.target.value)} />
                  </td>
                  <td className="border p-2">
                    <input type="number" className="w-full p-1 border rounded" placeholder="Reps"
                      value={entry.reps} onChange={(e) => handleChange(dayIndex, rowIndex, "reps", e.target.value)} />
                  </td>
                  <td className="border p-2">
                    <input type="number" className="w-full p-1 border rounded" placeholder="Weight"
                      value={entry.weight} onChange={(e) => handleChange(dayIndex, rowIndex, "weight", e.target.value)} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}



// import React from 'react';

// export default function Hamstring() {
//   return (
//     <div className="Chest">
//       <h1 align="center">
//       Hamstring & Glutes: 
//       </h1>
//       <p align="center">
//       The Hamstrings and Glutes are key muscle groups for lower body strength, hip extension, and overall power.
// Hamstrings: Located at the back of your thigh, they are responsible for knee flexion and hip extension.
// Glutes: Comprising the gluteus maximus, medius, and minimus, these muscles help with hip extension, stabilization, and posture

//  For the hamstring and glutes, you want to focus on 2 types of exercises hip hinge movement and isolation exercises You MUST incorporate both to see real progress.

//  2 workouts a week should be sufficient increase or decrease as needed

// Workouts:

//  Hip Hinge movement:
// Romanian deadlift 
// Stiff leg 
// Good morning  


// Isolation: 
// Hamstring curls seared or laying down 
// Nordic hamstring curls

//       </p>

//       <img
//         src="https://www.floridaortho.com/wp-content/uploads/leg-muscles.jpg"
//         style={{ width: '100%', height: 'auto' }}
//       />

      
//     </div>

//   );
// }

import { useState } from "react";

export default function HamstringGlutes() {
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
      <h1 className="text-center text-3xl font-bold">Hamstring & Glutes</h1>
      <p className="text-center mt-4 max-w-2xl mx-auto text-gray-700">
        The hamstrings and glutes are key muscle groups for lower body strength, hip extension, and overall power.
        <br /><br />
        <strong>Hamstrings:</strong> Located at the back of your thigh, responsible for knee flexion and hip extension.
        <br />
        <strong>Glutes:</strong> Comprising the gluteus maximus, medius, and minimus, these muscles aid in hip extension, stabilization, and posture.
        <br /><br />
        Focus on two types of exercises:
        <br />
        <strong>Hip Hinge Movement:</strong> Romanian deadlift, stiff-leg deadlift, good mornings.
        <br />
        <strong>Isolation:</strong> Seated or lying hamstring curls, Nordic hamstring curls.
        <br /><br />
        Recommended: 2 workouts per week, adjusting based on recovery and progress.
      </p>
      <img
        src="https://www.floridaortho.com/wp-content/uploads/leg-muscles.jpg"
        alt="Hamstring & Glutes Workout"
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


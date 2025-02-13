// import React from 'react';

// export default function Chest() {
//   return (
//     <div className="Chest">
//       <h1 align="center">
//         Chest 
//       </h1>
//       <p align="center">
//       The Chest is primarily composed of the pectoralis major and pectoralis minor. This is a key muscle group for upper body strength and aesthetics. Chest exercises not only enhance pushing strength but also contribute to better posture and upper body balance.
// To build your Pectorial muscle focus on 3 types of workouts 
// Horizontal press 
// /Incline press
// /Isolation

//  2 workouts per week is the sweet spot 3 max.


// Workouts: 

//  Horizontal: Bench press(dumbell or barbell) 
// egular or weighted pushups 
//  dips 

// Incline: incline Bench press(dumbell or barbell)
//  Decline pushups 

// Isolation: chest fly with dumbbell or cables 


//       </p>

//       <img
//         src="https://cdn.shopify.com/s/files/1/1214/5580/files/Muscle_Group_Chest.jpg?v=1601050935"
//         style={{ width: '100%', height: 'auto' }}
//       />
//     </div>

//   );
// }

import { useState } from "react";

export default function Chest() {
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
      <h1 className="text-center text-3xl font-bold">Chest</h1>
      <p className="text-center mt-4 max-w-2xl mx-auto text-gray-700">
        The chest is primarily composed of the pectoralis major and pectoralis minor. This key muscle group enhances pushing strength, posture, and upper body balance.
        <br /><br />
        To build your pectoral muscles, focus on three types of exercises:
        <br />
        <strong>Horizontal Press:</strong> Bench press (dumbbell or barbell), regular or weighted push-ups, dips.
        <br />
        <strong>Incline Press:</strong> Incline bench press (dumbbell or barbell), decline push-ups.
        <br />
        <strong>Isolation:</strong> Chest fly with dumbbells or cables.
        <br /><br />
        Recommended: 2 workouts per week, 3 max.
      </p>
      <img
        src="https://cdn.shopify.com/s/files/1/1214/5580/files/Muscle_Group_Chest.jpg?v=1601050935"
        alt="Chest Workout"
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


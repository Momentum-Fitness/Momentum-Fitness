// import React from 'react';

// export default function Calves() {
//   return (
//     <div className="Chest">
//       <h1 align="center">
//       Calves: 
//       </h1>
//       <p align="center">
//       The calves are located at the back of your lower legs and consist of two main muscles:
// Gastrocnemius: The larger, visible muscle responsible for explosive movements like jumping.
// Soleus: A deeper muscle that supports endurance-based activities like walking or running.
// Calf strength improves balance, stability, and athletic performance while reducing the risk of lower-body injuries.

// Mostly consists of calf raises pick whatever variation works for you. Try 

// Aim for 2 - 4 Workouts a week should be more than enough 6 times max if you really don't see any change consistency is key

// Workouts:

// Standing calf raise 
// Seated calf raise 
// Machine calf raise 
// Leg press/ smith machine 


//       </p>

//       <img
//         src="https://cdn.shopify.com/s/files/1/1214/5580/files/Muscle_Group_Chest.jpg?v=1601050935"
//         style={{ width: '100%', height: 'auto' }}
//       />
//     </div>

//   );
// }


import { useState } from "react";

export default function Calves() {
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
      <h1 className="text-center text-3xl font-bold">Calves</h1>
      <p className="text-center mt-4 max-w-2xl mx-auto text-gray-700">
        The calves are located at the back of your lower legs and consist of two main muscles:
        <br /><br />
        <strong>Gastrocnemius:</strong> The larger, visible muscle responsible for explosive movements like jumping.
        <br />
        <strong>Soleus:</strong> A deeper muscle that supports endurance-based activities like walking or running.
        <br /><br />
        Calf strength improves balance, stability, and athletic performance while reducing the risk of lower-body injuries.
        <br /><br />
        Mostly consists of calf raises. Pick whatever variation works for you.
        <br /><br />
        <strong>Recommended:</strong> 2-4 workouts per week, up to 6 times max if needed for growth.
        <br /><br />
        <strong>Workouts:</strong>
        <br />
        - Standing calf raise
        <br />
        - Seated calf raise
        <br />
        - Machine calf raise
        <br />
        - Leg press/Smith machine
      </p>
      <img
        src="https://images.squarespace-cdn.com/content/v1/53ec0c09e4b0eecc91fab644/1590456963791-MNZ3O9QOAF16HHVWF8NB/Thornleigh-Performance-Physiotherapy_Calf-anatomy.jpg"
        alt="Calves Workout"
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

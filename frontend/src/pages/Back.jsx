// import React from 'react';

// export default function Back() {
//   return (
//     <div className="Chest">
//       <h1 align="center">
//         Back(Rows and Pullups) 
//       </h1>
//       <p align="center">
//       Back
// (Rows and Pullups):

// The back is composed of several key muscle groups that are essential for posture, pulling strength and overall upper body balance:
// They consist of:
// Latissimus Dorsi (Lats): The largest back muscle, responsible for width and pulling motions.
// Trapezius (Traps): Runs from your neck to mid-back, aiding in shoulder and neck movement.
// Rhomboids: Situated between the shoulder blades, essential for scapular retraction.
// Erector Spinae: Supports the spine and aids in posture.

// The back consist of many muscles. There are two exercises to focus on horizontal pull exercises like rows and vertical pull like pullup variations  
// 2 workouts a week and increase as needed. 


// Workouts: 

// Horizontial: 
// Barbell rows /dumbell rows/chest supported rows/seated cable rows 

// Vertical: 
// Pull down machine and pull up variations


//       </p>

//       <img
//         src="https://i.pinimg.com/474x/af/6e/e2/af6ee28277203710c59bb1d9e0f1cbfd.jpg"
//         style={{ width: '100%', height: 'auto' }}
//       />
//     </div>

//   );
// }



import { useState } from "react";

export default function Back() {
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
      <h1 className="text-center text-3xl font-bold">Back (Rows and Pullups)</h1>
      <p className="text-center mt-4 max-w-2xl mx-auto text-gray-700">
        The back is composed of several key muscle groups that are essential for posture, pulling strength, and overall upper body balance:
        <br /><br />
        <strong>Latissimus Dorsi (Lats):</strong> The largest back muscle, responsible for width and pulling motions.
        <br />
        <strong>Trapezius (Traps):</strong> Runs from your neck to mid-back, aiding in shoulder and neck movement.
        <br />
        <strong>Rhomboids:</strong> Situated between the shoulder blades, essential for scapular retraction.
        <br />
        <strong>Erector Spinae:</strong> Supports the spine and aids in posture.
        <br /><br />
        The back consists of many muscles. Focus on two primary exercises:
        <br />
        <strong>Horizontal Pull:</strong> Barbell rows, dumbbell rows, chest-supported rows, seated cable rows.
        <br />
        <strong>Vertical Pull:</strong> Pull-down machine, pull-up variations.
        <br /><br />
        Recommended: 2 workouts per week, increasing as needed.
      </p>
      <img
        src="https://i.pinimg.com/474x/af/6e/e2/af6ee28277203710c59bb1d9e0f1cbfd.jpg"
        alt="Back Workout"
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


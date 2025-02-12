// import React from 'react';

// export default function Arms() {
//   return (
//     <div className="Chest">
//       <h1 align="center">
//         Arms 
//       </h1>
//       <p align="center">
//       Your Arms include biceps, triceps, and forearms, which are essential for pushing, pulling, and grip strength. Training these muscles improves both aesthetics and functional performance.

// For biceps focus on curls. The triceps require you to focus on the lateral head and long head. For the forearms do wrist curls with light weights 

// 2-4 workouts a week


// Workouts:

// Biceps(Curls): 
// Barbell or dumbbell curl 
// Hammer curl and overhand grip curl  
// Focus curl 

// Triceps:
// Lateral:Cable pull down/ diamond pushups/dips/close grip bench press
// Long head: Overhead extension
// Over head plate extension 

// Forearm: 
// Wrist curl (dumbbell/barbell/cable)
// Rice Bucket training

//       </p>

//       <img
//         src="https://i.pinimg.com/474x/af/6e/e2/af6ee28277203710c59bb1d9e0f1cbfd.jpg"
//         style={{ width: '100%', height: 'auto' }}
//       />
//     </div>



//   );
  
//   <div>


// </div>
// }





import { useState } from "react";

export default function ArmsWorkoutTracker() {
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
      {/* Arms Workout Guide Section */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Arms</h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-700">
          Your Arms include biceps, triceps, and forearms, which are essential for pushing, pulling, and grip strength.
          Training these muscles improves both aesthetics and functional performance.  
          <br /><br />
          <strong>For Biceps:</strong> Focus on curls (Barbell, Dumbbell, Hammer, Overhand Grip, and Focus Curls).  
          <br />
          <strong>For Triceps:</strong> Lateral head: Cable pull-down, diamond push-ups, dips, close-grip bench press.  
          Long head: Overhead extensions, Overhead plate extensions.  
          <br />
          <strong>For Forearms:</strong> Wrist curls (Dumbbell, Barbell, Cable), Rice Bucket Training.  
        </p>
        <img
          src="https://i.pinimg.com/474x/af/6e/e2/af6ee28277203710c59bb1d9e0f1cbfd.jpg"
          alt="Arms Workout"
          className="mx-auto mt-4 rounded-lg shadow-lg"
          style={{ width: '100%', maxWidth: '500px', height: 'auto' }}
        />
      </div>

      {/* Workout Tracker Section */}
      <h2 className="text-center text-2xl font-bold mb-4">Workout Tracker</h2>
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

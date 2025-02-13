// import React from 'react';

// export default function Abdominal() {
//     return (
//         <div className="Chest">
//             <h1 align="center">
//                 Abdominal Muscles
//             </h1>  
//                       <img
//                 src="https://getrealfitnessblog.wordpress.com/wp-content/uploads/2013/11/abdominals.jpg"
//                 style={{ width: '100%', height: 'auto' }}
//             />

//             <p align="center">
//                 The abdominal muscles, or abs, are essential for core stability, posture, and functional strength.

//                 They consist of:
//                 Rectus Abdominis: "Six-pack" muscles, responsible for flexing the spine.
//                 Obliques: Side muscles aiding in rotation and side-bending.
//                 Transverse Abdominis: Deep core muscles supporting posture and stabilizing the spine



//                 Focus on the Upper and lower abs. To properly work these areas focus on 2 types of exercises. weighted for main exercises and unweighted secondary exercises

//                 2-4 workouts a week

//                 Workouts: 

//                 Main upper abs 
//                 (weighted): 
// Machine cruch weighted situp 

// Secondary lower abs 
// (Notweighted):
// Hanging leg/ knee raise 

//             </p>

//         </div>


//     );
// }



import { useState } from "react";

export default function Abdominal() {
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
            <h1 className="text-center text-3xl font-bold">Abdominal Muscles</h1>
            <img
                src="https://getrealfitnessblog.wordpress.com/wp-content/uploads/2013/11/abdominals.jpg"
                className="mx-auto mt-4 rounded-lg shadow-lg"
                style={{ width: '100%', maxWidth: '500px', height: 'auto' }}
                alt="Abdominal Muscles"
            />
            <p className="mt-4 max-w-2xl mx-auto text-gray-700 text-center">
                The abdominal muscles, or abs, are essential for core stability, posture, and functional strength.
                <br /><br />
                <strong>They consist of:</strong>
                <br />Rectus Abdominis: "Six-pack" muscles, responsible for flexing the spine.
                <br />Obliques: Side muscles aiding in rotation and side-bending.
                <br />Transverse Abdominis: Deep core muscles supporting posture and stabilizing the spine.
                <br /><br />
                Focus on the Upper and Lower Abs with 2-4 workouts a week. Weighted exercises for main workouts and unweighted for secondary exercises.
                <br /><br />
                <strong>Main Upper Abs (Weighted):</strong> Machine Crunch, Weighted Sit-up.
                <br />
                <strong>Secondary Lower Abs (Unweighted):</strong> Hanging Leg/Knee Raise.
            </p>

            {/* Workout Tracker Section */}
            <h2 className="text-center text-2xl font-bold mt-8">Workout Tracker</h2>
            <div className="overflow-x-auto mt-4">
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


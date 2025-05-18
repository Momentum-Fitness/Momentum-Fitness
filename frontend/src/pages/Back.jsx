import React, { useState } from 'react';
import WorkoutCalendar from '../components/WorkoutCalendar';

export default function Back() {
  const [showHorizontal, setShowHorizontal] = useState(false);
  const [showVertical, setShowVertical] = useState(false);
  const [showMuscleGroups, setShowMuscleGroups] = useState(false);

  const buttonClasses = (isActive) => `
        flex items-center justify-center
        px-8 py-3.5
        rounded-xl
        font-semibold text-sm
        transform transition-all duration-300
        shadow-md hover:shadow-xl
        ${isActive
      ? 'bg-gradient-to-r from-green-600 to-green-700 text-white scale-105 shadow-green-200'
      : 'bg-gradient-to-r from-white to-gray-50 text-green-700 border border-green-100 hover:border-green-200'}
        hover:scale-105 active:scale-95
        backdrop-blur-sm
        relative
        overflow-hidden
        group
    `;

  const buttonSpanClasses = `
        absolute inset-0 w-full h-full
        bg-gradient-to-r from-green-600/20 to-transparent
        transform transition-transform duration-300 ease-out
        translate-x-full group-hover:translate-x-0
    `;

  return (
    <div className="p-6">
      <h1 className="text-center text-3xl font-bold">Back</h1>
      <h2 className="text-center text-1xl">(Rows and Pullups) </h2>

      <p className="text-center mt-4 max-w-2xl mx-auto text-gray-700">
        The back is a complex group of muscles that work together to support your spine essential for posture, pulling strength, and overall upper body balance:
        <br /><br />
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <button
            onClick={() => setShowMuscleGroups(!showMuscleGroups)}
            className={buttonClasses(showMuscleGroups)}
          >
            <span className={buttonSpanClasses}></span>
            <span className="mr-2 text-lg">
              {showMuscleGroups ? '−' : '+'}
            </span>
            <span className="relative z-10">
              {showMuscleGroups ? 'Hide Muscle Groups' : 'Show Muscle Groups'}
            </span>
          </button>
          <button
            onClick={() => setShowHorizontal(!showHorizontal)}
            className={buttonClasses(showHorizontal)}
          >
            <span className={buttonSpanClasses}></span>
            <span className="mr-2 text-lg">
              {showHorizontal ? '−' : '+'}
            </span>
            <span className="relative z-10">
              {showHorizontal ? 'Hide Horizontal' : 'Show Horizontal'}
            </span>
          </button>
          <button
            onClick={() => setShowVertical(!showVertical)}
            className={buttonClasses(showVertical)}
          >
            <span className={buttonSpanClasses}></span>
            <span className="mr-2 text-lg">
              {showVertical ? '−' : '+'}
            </span>
            <span className="relative z-10">
              {showVertical ? 'Hide Vertical' : 'Show Vertical'}
            </span>
          </button>
        </div>

        {showHorizontal && (
          <div className="mt-4 p-6 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-500 ease-in-out transform">
            <div className="space-y-4">
              <strong className="text-lg text-green-700 block border-b-2 border-green-100 pb-2">
                Horizontal Movements:
              </strong>
              <ul className="space-y-2 list-inside">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Chest supported rows: 50 reps, 2 sets of 25
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Seated cable rows: 50 reps, 2 sets of 25
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Barbell rows
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Dumbbell rows
                </li>
              </ul>
            </div>
          </div>
        )}

        {showVertical && (
          <div className="mt-4 p-6 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-500 ease-in-out transform">
            <div className="space-y-4">
              <strong className="text-lg text-green-700 block border-b-2 border-green-100 pb-2">
                Vertical Movements:
              </strong>
              <ul className="space-y-2 list-inside">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Pull down machine: 50 reps, 2 sets of 25
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Weighted pull up variations: 100 reps, 4 sets of 20
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Chin-ups
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Lat pulldowns
                </li>
              </ul>
            </div>
          </div>
        )}

        {showMuscleGroups && (
          <div className="mt-4 p-6 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-500 ease-in-out transform">
            <div className="space-y-4">
              <strong className="text-lg text-green-700 block border-b-2 border-green-100 pb-2">
                Back Muscle Groups:
              </strong>
              <ul className="space-y-2 list-inside">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  <strong>Latissimus Dorsi (Lats):</strong> The largest back muscle, responsible for width and pulling motions.
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  <strong>Trapezius (Traps):</strong> Runs from your neck to mid-back, aiding in shoulder and neck movement.
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  <strong>Rhomboids:</strong> Situated between the shoulder blades, essential for scapular retraction.
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  <strong>Erector Spinae:</strong> Supports the spine and aids in posture.
                </li>
              </ul>
            </div>
          </div>
        )}
        <br /><br />
        Recommended: 2 workouts per week, increasing as needed.
      </p>

      <img
        src="https://media.geeksforgeeks.org/wp-content/uploads/20240423132457/Diagram-of-back-muscles.webp"
        alt="Back Workout"
        className="mx-auto mt-4 rounded-lg shadow-lg"
        style={{ width: '100%', maxWidth: '500px', height: 'auto' }}
      />

      {/* Workout Tracker Section */}
      <h2 className="text-center text-2xl font-bold mt-8 mb-4">Workout Tracker</h2>
      <div className="max-w-5xl mx-auto">
        <WorkoutCalendar muscleGroup="back" />
      </div>
    </div>
  );
}


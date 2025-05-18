import React, { useState } from 'react';
import WorkoutCalendar from '../components/WorkoutCalendar';

export default function Calves() {
  const [showGastrocnemius, setShowGastrocnemius] = useState(false);
  const [showSoleus, setShowSoleus] = useState(false);
  const [showVariations, setShowVariations] = useState(false);

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
      <h1 className="text-center text-3xl font-bold">Calves</h1>
      <p className="text-center mt-4 max-w-2xl mx-auto text-gray-700">
        The calves are located at the back of your lower legs and consist of two main muscles.
        <br /><br />
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <button
            onClick={() => setShowGastrocnemius(!showGastrocnemius)}
            className={buttonClasses(showGastrocnemius)}
          >
            <span className={buttonSpanClasses}></span>
            <span className="mr-2 text-lg">
              {showGastrocnemius ? '−' : '+'}
            </span>
            <span className="relative z-10">
              {showGastrocnemius ? 'Hide Gastrocnemius' : 'Show Gastrocnemius'}
            </span>
          </button>
          <button
            onClick={() => setShowSoleus(!showSoleus)}
            className={buttonClasses(showSoleus)}
          >
            <span className={buttonSpanClasses}></span>
            <span className="mr-2 text-lg">
              {showSoleus ? '−' : '+'}
            </span>
            <span className="relative z-10">
              {showSoleus ? 'Hide Soleus' : 'Show Soleus'}
            </span>
          </button>
          <button
            onClick={() => setShowVariations(!showVariations)}
            className={buttonClasses(showVariations)}
          >
            <span className={buttonSpanClasses}></span>
            <span className="mr-2 text-lg">
              {showVariations ? '−' : '+'}
            </span>
            <span className="relative z-10">
              {showVariations ? 'Hide Variations' : 'Show Variations'}
            </span>
          </button>
        </div>

        {showGastrocnemius && (
          <div className="mt-4 p-6 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-500 ease-in-out transform">
            <div className="space-y-4">
              <strong className="text-lg text-green-700 block border-b-2 border-green-100 pb-2">
                Gastrocnemius Exercises:
              </strong>
              <p className="text-gray-600 mb-2">The larger, visible muscle responsible for explosive movements like jumping.</p>
              <ul className="space-y-2 list-inside">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Standing Calf Raises
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Jump Rope
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Box Jumps
                </li>
              </ul>
            </div>
          </div>
        )}

        {showSoleus && (
          <div className="mt-4 p-6 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-500 ease-in-out transform">
            <div className="space-y-4">
              <strong className="text-lg text-green-700 block border-b-2 border-green-100 pb-2">
                Soleus Exercises:
              </strong>
              <p className="text-gray-600 mb-2">A deeper muscle that supports endurance-based activities like walking or running.</p>
              <ul className="space-y-2 list-inside">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Seated Calf Raises
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Single-Leg Calf Raises
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Eccentric Heel Drops
                </li>
              </ul>
            </div>
          </div>
        )}

        {showVariations && (
          <div className="mt-4 p-6 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-500 ease-in-out transform">
            <div className="space-y-4">
              <strong className="text-lg text-green-700 block border-b-2 border-green-100 pb-2">
                Exercise Variations:
              </strong>
              <ul className="space-y-2 list-inside">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Machine Calf Raises
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Smith Machine Calf Raises
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Leg Press Calf Raises
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Donkey Calf Raises
                </li>
              </ul>
            </div>
          </div>
        )}
        <br /><br />
        <div className="font-medium text-gray-800">
          Recommended: 2-4 workouts per week, up to 6 times max if needed for growth.
        </div>
      </p>

      <img
        src="https://images.squarespace-cdn.com/content/v1/53ec0c09e4b0eecc91fab644/1590456963791-MNZ3O9QOAF16HHVWF8NB/Thornleigh-Performance-Physiotherapy_Calf-anatomy.jpg"
        alt="Calves Workout"
        className="mx-auto mt-4 rounded-lg shadow-lg"
        style={{ width: '100%', maxWidth: '500px', height: 'auto' }}
      />

      {/* Workout Tracker Section */}
      <h2 className="text-center text-2xl font-bold mt-8 mb-4">Workout Tracker</h2>
      <div className="max-w-5xl mx-auto">
        <WorkoutCalendar muscleGroup="calves" />
      </div>
    </div>
  );
}

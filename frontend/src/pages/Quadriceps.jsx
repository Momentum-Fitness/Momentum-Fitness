import React, { useState } from 'react';
import WorkoutCalendar from '../components/WorkoutCalendar';

export default function Quadriceps() {
  const [showCompound, setShowCompound] = useState(false);
  const [showIsolation, setShowIsolation] = useState(false);

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
      <h1 className="text-center text-3xl font-bold">Quadriceps</h1>
      <p className="text-center mt-4 max-w-2xl mx-auto text-gray-700">
        The quadriceps (quads) are a group of four muscles located at the front of your thigh, responsible for extending the knee and stabilizing the hip.
        Strong quads are essential for running, jumping, squatting, and overall lower-body strength.
        <br /><br />
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <button
            onClick={() => setShowCompound(!showCompound)}
            className={buttonClasses(showCompound)}
          >
            <span className={buttonSpanClasses}></span>
            <span className="mr-2 text-lg">
              {showCompound ? '−' : '+'}
            </span>
            <span className="relative z-10">
              {showCompound ? 'Hide Compound' : 'Show Compound'}
            </span>
          </button>
          <button
            onClick={() => setShowIsolation(!showIsolation)}
            className={buttonClasses(showIsolation)}
          >
            <span className={buttonSpanClasses}></span>
            <span className="mr-2 text-lg">
              {showIsolation ? '−' : '+'}
            </span>
            <span className="relative z-10">
              {showIsolation ? 'Hide Isolation' : 'Show Isolation'}
            </span>
          </button>
        </div>

        {showCompound && (
          <div className="mt-4 p-6 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-500 ease-in-out transform">
            <div className="space-y-4">
              <strong className="text-lg text-green-700 block border-b-2 border-green-100 pb-2">
                Compound Exercises:
              </strong>
              <ul className="space-y-2 list-inside">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Back Squats
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Front Squats
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Bulgarian Split Squats
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Walking Lunges
                </li>
              </ul>
            </div>
          </div>
        )}

        {showIsolation && (
          <div className="mt-4 p-6 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-500 ease-in-out transform">
            <div className="space-y-4">
              <strong className="text-lg text-green-700 block border-b-2 border-green-100 pb-2">
                Isolation Exercises:
              </strong>
              <ul className="space-y-2 list-inside">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Leg Extensions
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Sissy Squats
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Wall Sits
                </li>
              </ul>
            </div>
          </div>
        )}
        <br /><br />
        <div className="font-medium text-gray-800">
          Recommended: 1-3 workouts per week, with a focus on 2 to avoid disproportionate quad development.
        </div>
      </p>

      <img
        src="https://static.wixstatic.com/media/23ac3b_1855a057e8bb49d0907fada55e43778a~mv2.png/v1/fill/w_428,h_413,al_c,lg_1,q_85/23ac3b_1855a057e8bb49d0907fada55e43778a~mv2.png"
        alt="Quadriceps Workout"
        className="mx-auto mt-4 rounded-lg shadow-lg"
        style={{ width: '100%', maxWidth: '500px', height: 'auto' }}
      />

      {/* Workout Tracker Section */}
      <h2 className="text-center text-2xl font-bold mt-8 mb-4">Workout Tracker</h2>
      <div className="max-w-5xl mx-auto">
        <WorkoutCalendar muscleGroup="quadriceps" />
      </div>
    </div>
  );
}

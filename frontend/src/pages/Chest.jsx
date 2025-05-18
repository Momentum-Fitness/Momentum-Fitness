import React, { useState } from 'react';
import WorkoutCalendar from '../components/WorkoutCalendar';

export default function Chest() {
  const [showHorizontalPress, setShowHorizontalPress] = useState(false);
  const [showInclinePress, setShowInclinePress] = useState(false);
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
      <h1 className="text-center text-3xl font-bold">Chest</h1>
      <p className="text-center mt-4 max-w-2xl mx-auto text-gray-700">
        The chest is primarily composed of the pectoralis major and pectoralis minor. This key muscle group enhances pushing strength, posture, and upper body balance.
        <br /><br />
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <button
            onClick={() => setShowHorizontalPress(!showHorizontalPress)}
            className={buttonClasses(showHorizontalPress)}
          >
            <span className={buttonSpanClasses}></span>
            <span className="mr-2 text-lg">
              {showHorizontalPress ? '−' : '+'}
            </span>
            <span className="relative z-10">
              {showHorizontalPress ? 'Hide Horizontal Press' : 'Show Horizontal Press'}
            </span>
          </button>
          <button
            onClick={() => setShowInclinePress(!showInclinePress)}
            className={buttonClasses(showInclinePress)}
          >
            <span className={buttonSpanClasses}></span>
            <span className="mr-2 text-lg">
              {showInclinePress ? '−' : '+'}
            </span>
            <span className="relative z-10">
              {showInclinePress ? 'Hide Incline Press' : 'Show Incline Press'}
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

        {showHorizontalPress && (
          <div className="mt-4 p-6 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-500 ease-in-out transform">
            <div className="space-y-4">
              <strong className="text-lg text-green-700 block border-b-2 border-green-100 pb-2">
                Horizontal Press Exercises:
              </strong>
              <ul className="space-y-2 list-inside">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Bench Press (Barbell)
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Bench Press (Dumbbell)
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Push-ups (Regular or Weighted)
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Dips
                </li>
              </ul>
            </div>
          </div>
        )}

        {showInclinePress && (
          <div className="mt-4 p-6 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-500 ease-in-out transform">
            <div className="space-y-4">
              <strong className="text-lg text-green-700 block border-b-2 border-green-100 pb-2">
                Incline Press Exercises:
              </strong>
              <ul className="space-y-2 list-inside">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Incline Bench Press (Barbell)
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Incline Bench Press (Dumbbell)
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Decline Push-ups
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
                  Chest Fly (Dumbbell)
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Chest Fly (Cable)
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Pec Deck Machine
                </li>
              </ul>
            </div>
          </div>
        )}
        <br /><br />
        <div className="font-medium text-gray-800">
          Recommended: 2 workouts per week, 3 max for optimal recovery.
        </div>
      </p>

      <img
        src="https://cdn.shopify.com/s/files/1/1214/5580/files/Muscle_Group_Chest.jpg?v=1601050935"
        alt="Chest Workout"
        className="mx-auto mt-4 rounded-lg shadow-lg"
        style={{ width: '100%', maxWidth: '500px', height: 'auto' }}
      />

      {/* Workout Tracker Section */}
      <h2 className="text-center text-2xl font-bold mt-8 mb-4">Workout Tracker</h2>
      <div className="max-w-5xl mx-auto">
        <WorkoutCalendar muscleGroup="chest" />
      </div>
    </div>
  );
}


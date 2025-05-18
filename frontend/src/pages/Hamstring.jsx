import React, { useState } from 'react';
import WorkoutCalendar from '../components/WorkoutCalendar';

export default function Hamstring() {
  const [showHamstrings, setShowHamstrings] = useState(false);
  const [showGlutes, setShowGlutes] = useState(false);
  const [showCompound, setShowCompound] = useState(false);

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
      <h1 className="text-center text-3xl font-bold">Hamstring & Glutes</h1>
      <p className="text-center mt-4 max-w-2xl mx-auto text-gray-700">
        The hamstrings and glutes are key muscle groups for lower body strength, hip extension, and overall power.
        <br /><br />
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <button
            onClick={() => setShowHamstrings(!showHamstrings)}
            className={buttonClasses(showHamstrings)}
          >
            <span className={buttonSpanClasses}></span>
            <span className="mr-2 text-lg">
              {showHamstrings ? '−' : '+'}
            </span>
            <span className="relative z-10">
              {showHamstrings ? 'Hide Hamstrings' : 'Show Hamstrings'}
            </span>
          </button>
          <button
            onClick={() => setShowGlutes(!showGlutes)}
            className={buttonClasses(showGlutes)}
          >
            <span className={buttonSpanClasses}></span>
            <span className="mr-2 text-lg">
              {showGlutes ? '−' : '+'}
            </span>
            <span className="relative z-10">
              {showGlutes ? 'Hide Glutes' : 'Show Glutes'}
            </span>
          </button>
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
        </div>

        {showHamstrings && (
          <div className="mt-4 p-6 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-500 ease-in-out transform">
            <div className="space-y-4">
              <strong className="text-lg text-green-700 block border-b-2 border-green-100 pb-2">
                Hamstring Exercises:
              </strong>
              <p className="text-gray-600 mb-2">Located at the back of your thigh, responsible for knee flexion and hip extension.</p>
              <ul className="space-y-2 list-inside">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Lying Leg Curls
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Seated Leg Curls
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Nordic Curls
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Standing Leg Curls
                </li>
              </ul>
            </div>
          </div>
        )}

        {showGlutes && (
          <div className="mt-4 p-6 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-500 ease-in-out transform">
            <div className="space-y-4">
              <strong className="text-lg text-green-700 block border-b-2 border-green-100 pb-2">
                Glute Exercises:
              </strong>
              <p className="text-gray-600 mb-2">Comprising the gluteus maximus, medius, and minimus, these muscles aid in hip extension, stabilization, and posture.</p>
              <ul className="space-y-2 list-inside">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Hip Thrusts
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Glute Bridges
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Cable Pull-Throughs
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Banded Side Walks
                </li>
              </ul>
            </div>
          </div>
        )}

        {showCompound && (
          <div className="mt-4 p-6 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-500 ease-in-out transform">
            <div className="space-y-4">
              <strong className="text-lg text-green-700 block border-b-2 border-green-100 pb-2">
                Compound Movements:
              </strong>
              <ul className="space-y-2 list-inside">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Romanian Deadlifts
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Stiff-Leg Deadlifts
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Good Mornings
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Single-Leg Deadlifts
                </li>
              </ul>
            </div>
          </div>
        )}
        <br /><br />
        <div className="font-medium text-gray-800">
          Recommended: 2 workouts per week, adjusting based on recovery and progress.
        </div>
      </p>

      <img
        src="https://www.floridaortho.com/wp-content/uploads/leg-muscles.jpg"
        alt="Hamstring & Glutes Workout"
        className="mx-auto mt-4 rounded-lg shadow-lg"
        style={{ width: '100%', maxWidth: '500px', height: 'auto' }}
      />

      {/* Workout Tracker Section */}
      <h2 className="text-center text-2xl font-bold mt-8 mb-4">Workout Tracker</h2>
      <div className="max-w-5xl mx-auto">
        <WorkoutCalendar muscleGroup="hamstring" />
      </div>
    </div>
  );
}


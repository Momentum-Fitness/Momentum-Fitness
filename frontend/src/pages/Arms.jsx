import React, { useState } from 'react';
import WorkoutCalendar from '../components/WorkoutCalendar';

export default function Arms() {
  const [showBiceps, setShowBiceps] = useState(false);
  const [showTriceps, setShowTriceps] = useState(false);
  const [showForearms, setShowForearms] = useState(false);

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
      <h1 className="text-center text-3xl font-bold">Arms</h1>
      <p className="text-center mt-4 max-w-2xl mx-auto text-gray-700">
        Your Arms include biceps, triceps, and forearms, which are essential for pushing, pulling, and grip strength.
        Training these muscles improves both aesthetics and functional performance.
        <br /><br />
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <button
            onClick={() => setShowBiceps(!showBiceps)}
            className={buttonClasses(showBiceps)}
          >
            <span className={buttonSpanClasses}></span>
            <span className="mr-2 text-lg">
              {showBiceps ? '−' : '+'}
            </span>
            <span className="relative z-10">
              {showBiceps ? 'Hide Biceps' : 'Show Biceps'}
            </span>
          </button>
          <button
            onClick={() => setShowTriceps(!showTriceps)}
            className={buttonClasses(showTriceps)}
          >
            <span className={buttonSpanClasses}></span>
            <span className="mr-2 text-lg">
              {showTriceps ? '−' : '+'}
            </span>
            <span className="relative z-10">
              {showTriceps ? 'Hide Triceps' : 'Show Triceps'}
            </span>
          </button>
          <button
            onClick={() => setShowForearms(!showForearms)}
            className={buttonClasses(showForearms)}
          >
            <span className={buttonSpanClasses}></span>
            <span className="mr-2 text-lg">
              {showForearms ? '−' : '+'}
            </span>
            <span className="relative z-10">
              {showForearms ? 'Hide Forearms' : 'Show Forearms'}
            </span>
          </button>
        </div>

        {showBiceps && (
          <div className="mt-4 p-6 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-500 ease-in-out transform">
            <div className="space-y-4">
              <strong className="text-lg text-green-700 block border-b-2 border-green-100 pb-2">
                Biceps Exercises:
              </strong>
              <ul className="space-y-2 list-inside">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Barbell Curls
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Dumbbell Curls
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Hammer Curls
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Overhand Grip Curls
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Focus Curls
                </li>
              </ul>
            </div>
          </div>
        )}

        {showTriceps && (
          <div className="mt-4 p-6 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-500 ease-in-out transform">
            <div className="space-y-4">
              <strong className="text-lg text-green-700 block border-b-2 border-green-100 pb-2">
                Triceps Exercises:
              </strong>
              <div className="space-y-4">
                <div>
                  <ul className="space-y-2 list-inside mt-2">
                    <li className="flex items-center">
                      <span className="text-green-600 mr-2">•</span>
                      Cable Pull-downs
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-600 mr-2">•</span>
                      Diamond Push-ups
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-600 mr-2">•</span>
                      Dips
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-600 mr-2">•</span>
                      Close-grip Bench Press
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2 list-inside mt-2">
                    <li className="flex items-center">
                      <span className="text-green-600 mr-2">•</span>
                      Overhead Extensions
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-600 mr-2">•</span>
                      Overhead Plate Extensions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {showForearms && (
          <div className="mt-4 p-6 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-500 ease-in-out transform">
            <div className="space-y-4">
              <strong className="text-lg text-green-700 block border-b-2 border-green-100 pb-2">
                Forearm Exercises:
              </strong>
              <ul className="space-y-2 list-inside">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Dumbbell Wrist Curls
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Barbell Wrist Curls
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Cable Wrist Curls
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Rice Bucket Training
                </li>
              </ul>
            </div>
          </div>
        )}
      </p>

      <img
        src="https://i.pinimg.com/474x/af/6e/e2/af6ee28277203710c59bb1d9e0f1cbfd.jpg"
        alt="Arms Workout"
        className="mx-auto mt-4 rounded-lg shadow-lg"
        style={{ width: '100%', maxWidth: '500px', height: 'auto' }}
      />

      {/* Workout Tracker Section */}
      <h2 className="text-center text-2xl font-bold mt-8 mb-4">Workout Tracker</h2>
      <div className="max-w-5xl mx-auto">
        <WorkoutCalendar muscleGroup="arms" />
      </div>
    </div>
  );
}

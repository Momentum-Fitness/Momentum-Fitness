import React, { useState } from 'react';
import WorkoutCalendar from '../components/WorkoutCalendar';

export default function Shoulders() {
  const [showAnterior, setShowAnterior] = useState(false);
  const [showLateral, setShowLateral] = useState(false);
  const [showPosterior, setShowPosterior] = useState(false);

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
      <h1 className="text-center text-3xl font-bold">Shoulders</h1>
      <p className="text-center mt-4 max-w-2xl mx-auto text-gray-700">
        The shoulders are composed of the deltoid muscles, which are crucial for upper body strength, stability, and mobility.
        <br /><br />
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <button
            onClick={() => setShowAnterior(!showAnterior)}
            className={buttonClasses(showAnterior)}
          >
            <span className={buttonSpanClasses}></span>
            <span className="mr-2 text-lg">
              {showAnterior ? '−' : '+'}
            </span>
            <span className="relative z-10">
              {showAnterior ? 'Hide Anterior' : 'Show Anterior'}
            </span>
          </button>
          <button
            onClick={() => setShowLateral(!showLateral)}
            className={buttonClasses(showLateral)}
          >
            <span className={buttonSpanClasses}></span>
            <span className="mr-2 text-lg">
              {showLateral ? '−' : '+'}
            </span>
            <span className="relative z-10">
              {showLateral ? 'Hide Lateral' : 'Show Lateral'}
            </span>
          </button>
          <button
            onClick={() => setShowPosterior(!showPosterior)}
            className={buttonClasses(showPosterior)}
          >
            <span className={buttonSpanClasses}></span>
            <span className="mr-2 text-lg">
              {showPosterior ? '−' : '+'}
            </span>
            <span className="relative z-10">
              {showPosterior ? 'Hide Posterior' : 'Show Posterior'}
            </span>
          </button>
        </div>

        {showAnterior && (
          <div className="mt-4 p-6 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-500 ease-in-out transform">
            <div className="space-y-4">
              <strong className="text-lg text-green-700 block border-b-2 border-green-100 pb-2">
                Anterior (Front) Deltoid:
              </strong>
              <p className="text-gray-600 mb-2">Used for pushing and lifting movements</p>
              <ul className="space-y-2 list-inside">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Military Press (Barbell)
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Shoulder Press (Dumbbell)
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Front Raises
                </li>
              </ul>
            </div>
          </div>
        )}

        {showLateral && (
          <div className="mt-4 p-6 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-500 ease-in-out transform">
            <div className="space-y-4">
              <strong className="text-lg text-green-700 block border-b-2 border-green-100 pb-2">
                Lateral (Side) Deltoid:
              </strong>
              <p className="text-gray-600 mb-2">Creates width and roundness in the shoulders</p>
              <ul className="space-y-2 list-inside">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Lateral Raises
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Upright Rows
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Cable Lateral Raises
                </li>
              </ul>
            </div>
          </div>
        )}

        {showPosterior && (
          <div className="mt-4 p-6 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-500 ease-in-out transform">
            <div className="space-y-4">
              <strong className="text-lg text-green-700 block border-b-2 border-green-100 pb-2">
                Posterior (Rear) Deltoid:
              </strong>
              <p className="text-gray-600 mb-2">Important for pulling motions and posture</p>
              <ul className="space-y-2 list-inside">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Reverse Fly
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Face Pulls
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Bent-Over Lateral Raises
                </li>
              </ul>
            </div>
          </div>
        )}
        <br /><br />
        <div className="font-medium text-gray-800">
          Recommended: 2 workouts per week max for optimal recovery
        </div>
      </p>

      <img
        src="https://cdn.britannica.com/36/113036-050-913798F2/Muscles-shoulder.jpg"
        alt="Shoulders Workout"
        className="mx-auto mt-4 rounded-lg shadow-lg"
        style={{ width: '100%', maxWidth: '500px', height: 'auto' }}
      />

      {/* Workout Tracker Section */}
      <h2 className="text-center text-2xl font-bold mt-8 mb-4">Workout Tracker</h2>
      <div className="max-w-5xl mx-auto">
        <WorkoutCalendar muscleGroup="shoulders" />
      </div>
    </div>
  );
}



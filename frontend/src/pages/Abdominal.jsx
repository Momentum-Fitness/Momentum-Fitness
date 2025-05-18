import React, { useState } from 'react';
import WorkoutCalendar from '../components/WorkoutCalendar';

export default function Abdominal() {
    const [showMuscleInfo, setShowMuscleInfo] = useState(false);
    const [showExercises, setShowExercises] = useState(false);

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
            <h1 className="text-center text-3xl font-bold">Abdominal Muscles</h1>
            <p className="text-center mt-4 max-w-2xl mx-auto text-gray-700">
                The abdominal muscles are essential for core strength, stability, and functional strength.
                <br /><br />
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
                    <button
                        onClick={() => setShowMuscleInfo(!showMuscleInfo)}
                        className={buttonClasses(showMuscleInfo)}
                    >
                        <span className={buttonSpanClasses}></span>
                        <span className="mr-2 text-lg">
                            {showMuscleInfo ? '−' : '+'}
                        </span>
                        <span className="relative z-10">
                            {showMuscleInfo ? 'Hide Muscle Groups' : 'Show Muscle Groups'}
                        </span>
                    </button>
                    <button
                        onClick={() => setShowExercises(!showExercises)}
                        className={buttonClasses(showExercises)}
                    >
                        <span className={buttonSpanClasses}></span>
                        <span className="mr-2 text-lg">
                            {showExercises ? '−' : '+'}
                        </span>
                        <span className="relative z-10">
                            {showExercises ? 'Hide Exercises' : 'Show Exercises'}
                        </span>
                    </button>
                </div>
                {showMuscleInfo && (
                    <div className="mt-4 p-6 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-500 ease-in-out transform">
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <strong className="text-green-700">Rectus Abdominis:</strong>
                                <span>The "six-pack" muscles, responsible for trunk flexion.</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <strong className="text-green-700">Obliques:</strong>
                                <span>Side muscles that aid in rotation and side bending.</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <strong className="text-green-700">Transverse Abdominis:</strong>
                                <span>Deep core muscle that stabilizes the spine.</span>
                            </div>
                        </div>
                    </div>
                )}
                {showExercises && (
                    <div className="mt-4 p-6 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-500 ease-in-out transform">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">


                                <strong className="text-lg text-green-700 block border-b-2 border-green-100 pb-2">
                                    Upper Ab Exercises:
                                </strong>
                                <ul className="space-y-2 list-inside">
                                    <li className="flex items-center">
                                        <span className="text-green-600 mr-2">•</span>
                                        Crunches and sit-ups
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-green-600 mr-2">•</span>
                                        Russian twists for obliques
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-green-600 mr-2">•</span>
                                        Planks for overall core stability
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <strong className="text-lg text-green-700 block border-b-2 border-green-100 pb-2">
                                    Lower Ab Exercises:
                                </strong>
                                <ul className="space-y-2 list-inside">
                                    <li className="flex items-center">
                                        <span className="text-green-600 mr-2">•</span>
                                        Leg raises
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-green-600 mr-2">•</span>
                                        Reverse crunches
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-green-600 mr-2">•</span>
                                        Hanging knee raises
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
                <br /><br />
                <div className="font-medium text-gray-800">
                    Recommended: 2-3 workouts per week, with proper rest between sessions.
                </div>
            </p>

            <img
                src="https://getrealfitnessblog.wordpress.com/wp-content/uploads/2013/11/abdominals.jpg"
                alt="Abdominal Muscles"
                className="mx-auto mt-4 rounded-lg shadow-lg"
                style={{ width: '100%', maxWidth: '500px', height: 'auto' }}
            />

            {/* Workout Tracker Section */}
            <h2 className="text-center text-2xl font-bold mt-8 mb-4">Workout Tracker</h2>
            <div className="max-w-5xl mx-auto">
                <WorkoutCalendar muscleGroup="abdominal" />
            </div>
        </div>
    );
}


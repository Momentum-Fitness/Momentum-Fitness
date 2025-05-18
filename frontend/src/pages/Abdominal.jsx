import React, { useState } from 'react';
import WorkoutCalendar from '../components/WorkoutCalendar';

export default function Abdominal() {
    const [showMuscleInfo, setShowMuscleInfo] = useState(false);
    const [showExercises, setShowExercises] = useState(false);

    return (
        <div className="muscle-page-container">
            <div className="muscle-page-header">
                <h1>Abdominal Muscles</h1>
                <p className="muscle-page-description">
                    The abdominal muscles are essential for core strength, stability, and functional strength.
                </p>
            </div>

            <div className="muscle-button-container">
                <button
                    onClick={() => setShowMuscleInfo(!showMuscleInfo)}
                    className={`muscle-button ${showMuscleInfo ? 'active' : ''}`}
                >
                    <span className="muscle-button-icon">{showMuscleInfo ? '−' : '+'}</span>
                    {showMuscleInfo ? 'Hide Muscle Groups' : 'Show Muscle Groups'}
                </button>
                <button
                    onClick={() => setShowExercises(!showExercises)}
                    className={`muscle-button ${showExercises ? 'active' : ''}`}
                >
                    <span className="muscle-button-icon">{showExercises ? '−' : '+'}</span>
                    {showExercises ? 'Hide Exercises' : 'Show Exercises'}
                </button>
            </div>

            {showMuscleInfo && (
                <div className="muscle-content-panel active">
                    <div className="muscle-content-header">
                        <strong>Abdominal Muscle Groups</strong>
                    </div>
                    <div className="muscle-content-body">
                        <ul className="exercise-list">
                            <li className="exercise-item">
                                <span className="exercise-bullet"></span>
                                <span className="exercise-name">
                                    <strong>Rectus Abdominis:</strong> The "six-pack" muscles, responsible for flexing the spine.
                                </span>
                            </li>
                            <li className="exercise-item">
                                <span className="exercise-bullet"></span>
                                <span className="exercise-name">
                                    <strong>Obliques:</strong> Side muscles that aid in rotation and side bending.
                                </span>
                            </li>
                            <li className="exercise-item">
                                <span className="exercise-bullet"></span>
                                <span className="exercise-name">
                                    <strong>Transverse Abdominis:</strong> Deep core muscle that supposts posture & stabilizes the spine.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            )}

            {showExercises && (
                <div className="muscle-content-panel active">
                    <div className="muscle-content-header">
                        <strong>Abdominal Exercises</strong>
                    </div>
                    <div className="muscle-content-body">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-lg font-semibold mb-4" style={{ color: '#000000' }}>Upper Ab Exercises:</h3>
                                <ul className="exercise-list">
                                    <li className="exercise-item">
                                        <span className="exercise-bullet"></span>
                                        <span className="exercise-name">Crunches </span>
                                    </li>
                                    <li className="exercise-item">
                                        <span className="exercise-bullet"></span>
                                        <span className="exercise-name">Sit Ups</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg  font-semibold mb-4" style={{ color: '#000000' }}>Lower Ab Exercises:</h3>
                                <ul className="exercise-list">
                                    <li className="exercise-item">
                                        <span className="exercise-bullet"></span>
                                        <span className="exercise-name">Leg raises</span>
                                    </li>

                                    <li className="exercise-item">
                                        <span className="exercise-bullet"></span>
                                        <span className="exercise-name">Hanging knee raises</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <p className="muscle-page-description text-center">
                Recommended: 2-3 workouts per week, with proper rest between sessions.
            </p>

            <img
                src="https://getrealfitnessblog.wordpress.com/wp-content/uploads/2013/11/abdominals.jpg"
                alt="Abdominal Muscles"
                className="workout-image"
            />

            <div className="workout-tracker-section">
                <div className="workout-tracker-header">
                    <h2>Workout Tracker</h2>
                </div>
                <div className="max-w-5xl mx-auto">
                    <WorkoutCalendar muscleGroup="abdominal" />
                </div>
            </div>
        </div>
    );
}


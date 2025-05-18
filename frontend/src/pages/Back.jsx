import React, { useState } from 'react';
import WorkoutCalendar from '../components/WorkoutCalendar';

export default function Back() {
  const [showHorizontal, setShowHorizontal] = useState(false);
  const [showVertical, setShowVertical] = useState(false);
  const [showMuscleGroups, setShowMuscleGroups] = useState(false);

  return (
    <div className="muscle-page-container">
      <div className="muscle-page-header">
        <h1>Back</h1>
        <h2 className="text-1xl">(Rows and Pullups)</h2>
        <p className="muscle-page-description">
          The back is a complex group of muscles that work together to support your spine essential for posture, pulling strength, and overall upper body balance:
        </p>
      </div>

      <div className="muscle-button-container">
        <button
          onClick={() => setShowMuscleGroups(!showMuscleGroups)}
          className={`muscle-button ${showMuscleGroups ? 'active' : ''}`}
        >
          <span className="muscle-button-icon">{showMuscleGroups ? '−' : '+'}</span>
          {showMuscleGroups ? 'Hide Muscle Groups' : 'Show Muscle Groups'}
        </button>

        <button
          onClick={() => setShowHorizontal(!showHorizontal)}
          className={`muscle-button ${showHorizontal ? 'active' : ''}`}
        >
          <span className="muscle-button-icon">{showHorizontal ? '−' : '+'}</span>
          {showHorizontal ? 'Hide Horizontal' : 'Show Horizontal'}
        </button>

        <button
          onClick={() => setShowVertical(!showVertical)}
          className={`muscle-button ${showVertical ? 'active' : ''}`}
        >
          <span className="muscle-button-icon">{showVertical ? '−' : '+'}</span>
          {showVertical ? 'Hide Vertical' : 'Show Vertical'}
        </button>
      </div>

      {showHorizontal && (
        <div className="muscle-content-panel active">
          <div className="muscle-content-header">
            <strong>Horizontal Movements</strong>
          </div>
          <div className="muscle-content-body">
            <ul className="exercise-list">
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Chest supported rows: 50 reps, 2 sets of 25</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Seated cable rows: 50 reps, 2 sets of 25</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Barbell rows</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Dumbbell rows</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {showVertical && (
        <div className="muscle-content-panel active">
          <div className="muscle-content-header">
            <strong>Vertical Movements</strong>
          </div>
          <div className="muscle-content-body">
            <ul className="exercise-list">
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Pull down machine: 50 reps, 2 sets of 25</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Weighted pull up variations: 100 reps, 4 sets of 20</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Chin-ups</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Lat pulldowns</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {showMuscleGroups && (
        <div className="muscle-content-panel active">
          <div className="muscle-content-header">
            <strong>Back Muscle Groups</strong>
          </div>
          <div className="muscle-content-body">
            <ul className="exercise-list">
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">
                  <strong>Latissimus Dorsi (Lats):</strong> The largest back muscle, responsible for width and pulling motions.
                </span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">
                  <strong>Trapezius (Traps):</strong> Runs from your neck to mid-back, aiding in shoulder and neck movement.
                </span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">
                  <strong>Rhomboids:</strong> Situated between the shoulder blades, essential for scapular retraction.
                </span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">
                  <strong>Erector Spinae:</strong> Supports the spine and aids in posture.
                </span>
              </li>
            </ul>
          </div>
        </div>
      )}

      <p className="muscle-page-description text-center">
        Recommended: 2 workouts per week, increasing as needed.
      </p>

      <img
        src="https://media.geeksforgeeks.org/wp-content/uploads/20240423132457/Diagram-of-back-muscles.webp"
        alt="Back Workout"
        className="workout-image"
      />

      <div className="workout-tracker-section">
        <div className="workout-tracker-header">
          <h2>Workout Tracker</h2>
        </div>
        <div className="max-w-5xl mx-auto">
          <WorkoutCalendar muscleGroup="back" />
        </div>
      </div>
    </div>
  );
}


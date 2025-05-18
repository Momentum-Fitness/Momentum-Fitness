import React, { useState } from 'react';
import WorkoutCalendar from '../components/WorkoutCalendar';

export default function Calves() {
  const [showGastrocnemius, setShowGastrocnemius] = useState(false);
  const [showSoleus, setShowSoleus] = useState(false);
  const [showVariations, setShowVariations] = useState(false);

  return (
    <div className="muscle-page-container">
      <div className="muscle-page-header">
        <h1>Calves</h1>
        <p className="muscle-page-description">
          The calves are located at the back of your lower legs and consist of two main muscles.
        </p>
      </div>

      <div className="muscle-button-container">
        <button
          onClick={() => setShowGastrocnemius(!showGastrocnemius)}
          className={`muscle-button ${showGastrocnemius ? 'active' : ''}`}
        >
          <span className="muscle-button-icon">{showGastrocnemius ? '−' : '+'}</span>
          {showGastrocnemius ? 'Hide Gastrocnemius' : 'Show Gastrocnemius'}
        </button>

        <button
          onClick={() => setShowSoleus(!showSoleus)}
          className={`muscle-button ${showSoleus ? 'active' : ''}`}
        >
          <span className="muscle-button-icon">{showSoleus ? '−' : '+'}</span>
          {showSoleus ? 'Hide Soleus' : 'Show Soleus'}
        </button>

        <button
          onClick={() => setShowVariations(!showVariations)}
          className={`muscle-button ${showVariations ? 'active' : ''}`}
        >
          <span className="muscle-button-icon">{showVariations ? '−' : '+'}</span>
          {showVariations ? 'Hide Variations' : 'Show Variations'}
        </button>
      </div>

      {showGastrocnemius && (
        <div className="muscle-content-panel active">
          <div className="muscle-content-header">
            <strong>Gastrocnemius:</strong>
          </div>
          <div className="muscle-content-body">
            <p style={{ color: '#000000' }}>The larger, visible muscle responsible for explosive movements like jumping.</p>
            <ul className="exercise-list">
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Standing Calf Raises</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Jump Rope</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Box Jumps</span>
              </li>


            </ul>
          </div>
        </div>
      )}

      {showSoleus && (
        <div className="muscle-content-panel active">
          <div className="muscle-content-header">
            <strong>Soleus:</strong>
          </div>
          <div className="muscle-content-body">
            <p style={{ color: '#000000' }}>A deeper muscle that supports endurance-based activities like walking or running.</p>
            <ul className="exercise-list">
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Seated Calf Raises</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Single-Leg Calf Raises</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Eccentric Heel Drops</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {showVariations && (
        <div className="muscle-content-panel active">
          <div className="muscle-content-header">
            <strong>Exercise Variations:</strong>
          </div>
          <div className="muscle-content-body">
            <ul className="exercise-list">
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Machine Calf Raises</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Smith Machine Calf Raises</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Leg Press Calf Raises</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Donkey Calf Raises</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      <div className="muscle-page-description text-center">
        Recommended: 2-4 workouts per week, up to 6 times max if needed for growth.
      </div>

      <img
        src="https://images.squarespace-cdn.com/content/v1/53ec0c09e4b0eecc91fab644/1590456963791-MNZ3O9QOAF16HHVWF8NB/Thornleigh-Performance-Physiotherapy_Calf-anatomy.jpg"
        alt="Calves Workout"
        className="workout-image"
      />

      <div className="workout-tracker-section">
        <div className="workout-tracker-header">
          <h2>Workout Tracker</h2>
        </div>
        <div className="max-w-5xl mx-auto">
          <WorkoutCalendar muscleGroup="calves" />
        </div>
      </div>
    </div>
  );
}

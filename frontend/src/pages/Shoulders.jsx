import React, { useState } from 'react';
import WorkoutCalendar from '../components/WorkoutCalendar';

export default function Shoulders() {
  const [showAnterior, setShowAnterior] = useState(false);
  const [showLateral, setShowLateral] = useState(false);
  const [showPosterior, setShowPosterior] = useState(false);

  return (
    <div className="muscle-page-container">
      <div className="muscle-page-header">
        <h1>Shoulders</h1>
        <p className="muscle-page-description">
          The shoulders are composed of the deltoid muscles, which are crucial for upper body strength, stability, and mobility.
        </p>
      </div>

      <div className="muscle-button-container">
        <button
          onClick={() => setShowAnterior(!showAnterior)}
          className={`muscle-button ${showAnterior ? 'active' : ''}`}
        >
          <span className="muscle-button-icon">{showAnterior ? '−' : '+'}</span>
          {showAnterior ? 'Hide Anterior' : 'Show Anterior'}
        </button>

        <button
          onClick={() => setShowLateral(!showLateral)}
          className={`muscle-button ${showLateral ? 'active' : ''}`}
        >
          <span className="muscle-button-icon">{showLateral ? '−' : '+'}</span>
          {showLateral ? 'Hide Lateral' : 'Show Lateral'}
        </button>

        <button
          onClick={() => setShowPosterior(!showPosterior)}
          className={`muscle-button ${showPosterior ? 'active' : ''}`}
        >
          <span className="muscle-button-icon">{showPosterior ? '−' : '+'}</span>
          {showPosterior ? 'Hide Posterior' : 'Show Posterior'}
        </button>
      </div>

      {showAnterior && (
        <div className="muscle-content-panel active">
          <div className="muscle-content-header">
            <strong>Anterior (Front) Deltoid:</strong>
          </div>
          <div className="muscle-content-body">
            <p style={{ color: '#000000' }}>Used for pushing and lifting movements</p>
            <ul className="exercise-list">
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Military Press (Barbell)</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Shoulder Press (Dumbbell)</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Front Raises</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {showLateral && (
        <div className="muscle-content-panel active">
          <div className="muscle-content-header">
            <strong>Lateral (Side) Deltoid:</strong>
          </div>
          <div className="muscle-content-body">
            <p style={{ color: '#000000' }}> Creates width and roundness in the shoulders</p>
            <ul className="exercise-list">
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Lateral Raises</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Upright Rows</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Cable Lateral Raises</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {showPosterior && (
        <div className="muscle-content-panel active">
          <div className="muscle-content-header">
            <strong>Posterior (Rear) Deltoid:</strong>
          </div>
          <div className="muscle-content-body">
            <p style={{ color: '#000000' }}>Important for pulling motions and posture</p>
            <ul className="exercise-list">
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Reverse Fly</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Face Pulls</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Bent-Over Lateral Raises</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      <div className="muscle-page-description text-center">
        Recommended: 2 workouts per week max for optimal recovery.
      </div>

      <img
        src="https://cdn.britannica.com/36/113036-050-913798F2/Muscles-shoulder.jpg"
        alt="Shoulders Workout"
        className="workout-image"
      />

      <div className="workout-tracker-section">
        <div className="workout-tracker-header">
          <h2>Workout Tracker</h2>
        </div>
        <div className="max-w-5xl mx-auto">
          <WorkoutCalendar muscleGroup="shoulders" />
        </div>
      </div>
    </div>
  );
}



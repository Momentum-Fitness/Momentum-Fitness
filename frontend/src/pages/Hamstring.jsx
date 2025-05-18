import React, { useState } from 'react';
import WorkoutCalendar from '../components/WorkoutCalendar';

export default function Hamstring() {
  const [showHamstrings, setShowHamstrings] = useState(false);
  const [showGlutes, setShowGlutes] = useState(false);
  const [showCompound, setShowCompound] = useState(false);

  return (
    <div className="muscle-page-container">
      <div className="muscle-page-header">
        <h1>Hamstring & Glutes</h1>
        <p className="muscle-page-description">
          The hamstrings and glutes are key muscle groups for lower body strength and power.
        </p>
      </div>

      <div className="muscle-button-container">
        <button
          onClick={() => setShowHamstrings(!showHamstrings)}
          className={`muscle-button ${showHamstrings ? 'active' : ''}`}
        >
          <span className="muscle-button-icon">{showHamstrings ? '−' : '+'}</span>
          {showHamstrings ? 'Hide Hamstrings' : 'Show Hamstrings'}
        </button>

        <button
          onClick={() => setShowGlutes(!showGlutes)}
          className={`muscle-button ${showGlutes ? 'active' : ''}`}
        >
          <span className="muscle-button-icon">{showGlutes ? '−' : '+'}</span>
          {showGlutes ? 'Hide Glutes' : 'Show Glutes'}
        </button>

        <button
          onClick={() => setShowCompound(!showCompound)}
          className={`muscle-button ${showCompound ? 'active' : ''}`}
        >
          <span className="muscle-button-icon">{showCompound ? '−' : '+'}</span>
          {showCompound ? 'Hide Compound' : 'Show Compound'}
        </button>
      </div>

      {showHamstrings && (
        <div className="muscle-content-panel active">
          <div className="muscle-content-header">
            <strong>Hamstring Exercises:</strong>
          </div>
          <div className="muscle-content-body">
            <p style={{ color: '#000000' }}>Located at the back of your thigh, responsible for knee flexion and hip extension.</p>
            <ul className="exercise-list">
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Lying Leg Curls</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Seated Leg Curls</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Nordic Curls</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Standing Leg Curls</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {showGlutes && (
        <div className="muscle-content-panel active">
          <div className="muscle-content-header">
            <strong>Glute Exercises:</strong>
          </div>
          <div className="muscle-content-body">
            <p style={{ color: '#000000' }}>Comprising the gluteus maximus, medius, and minimus, these muscles aid in hip extension and stabilization.</p>
            <ul className="exercise-list">
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Hip Thrusts</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Glute Bridges</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Cable Pull-Throughs</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Banded Side Walks</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {showCompound && (
        <div className="muscle-content-panel active">
          <div className="muscle-content-header">
            <strong>Compound Movements:</strong>
          </div>
          <div className="muscle-content-body">
            <ul className="exercise-list">
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Romanian Deadlifts</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Stiff-Leg Deadlifts</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Good Mornings</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Single-Leg Deadlifts</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      <div className="muscle-page-description text-center">
        Recommended: 2 workouts per week, adjusting based on recovery and progress.
      </div>

      <img
        src="https://www.floridaortho.com/wp-content/uploads/leg-muscles.jpg"
        alt="Hamstring & Glutes Workout"
        className="workout-image"
      />

      <div className="workout-tracker-section">
        <div className="workout-tracker-header">
          <h2>Workout Tracker</h2>
        </div>
        <div className="max-w-5xl mx-auto">
          <WorkoutCalendar muscleGroup="hamstring" />
        </div>
      </div>
    </div>
  );
}


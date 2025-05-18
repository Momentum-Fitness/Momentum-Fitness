import React, { useState } from 'react';
import WorkoutCalendar from '../components/WorkoutCalendar';

export default function Chest() {
  const [showHorizontalPress, setShowHorizontalPress] = useState(false);
  const [showInclinePress, setShowInclinePress] = useState(false);
  const [showIsolation, setShowIsolation] = useState(false);

  return (
    <div className="muscle-page-container">
      <div className="muscle-page-header">
        <h1>Chest</h1>
        <p className="muscle-page-description">
          The chest is primarily composed of the pectoralis major and pectoralis minor. This key muscle group enhances pushing strength, posture, and upper body balance.
        </p>
      </div>

      <div className="muscle-button-container">
        <button
          onClick={() => setShowHorizontalPress(!showHorizontalPress)}
          className={`muscle-button ${showHorizontalPress ? 'active' : ''}`}
        >
          <span className="muscle-button-icon">{showHorizontalPress ? '−' : '+'}</span>
          {showHorizontalPress ? 'Hide Horizontal Press' : 'Show Horizontal Press'}
        </button>

        <button
          onClick={() => setShowInclinePress(!showInclinePress)}
          className={`muscle-button ${showInclinePress ? 'active' : ''}`}
        >
          <span className="muscle-button-icon">{showInclinePress ? '−' : '+'}</span>
          {showInclinePress ? 'Hide Incline Press' : 'Show Incline Press'}
        </button>

        <button
          onClick={() => setShowIsolation(!showIsolation)}
          className={`muscle-button ${showIsolation ? 'active' : ''}`}
        >
          <span className="muscle-button-icon">{showIsolation ? '−' : '+'}</span>
          {showIsolation ? 'Hide Isolation' : 'Show Isolation'}
        </button>
      </div>

      {showHorizontalPress && (
        <div className="muscle-content-panel active">
          <div className="muscle-content-header">
            <strong>Horizontal Press Exercises</strong>
          </div>
          <div className="muscle-content-body">
            <ul className="exercise-list">
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Bench Press (Barbell/Dumbbell)</span>
              </li>
              
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Push-ups (Regular or Weighted)</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Dips (Regular or Weighted)</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {showInclinePress && (
        <div className="muscle-content-panel active">
          <div className="muscle-content-header">
            <strong>Incline Press Exercises</strong>
          </div>
          <div className="muscle-content-body">
            <ul className="exercise-list">
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Incline Bench Press (Barbell/Dumbbell)</span>
              </li>
              
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Incline/Decline Push-ups</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {showIsolation && (
        <div className="muscle-content-panel active">
          <div className="muscle-content-header">
            <strong>Isolation Exercises</strong>
          </div>
          <div className="muscle-content-body">
            <ul className="exercise-list">
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Chest Fly (Dumbbell/Cable)</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Pec Deck Machine</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      <p className="muscle-page-description text-center">
        Recommended: 2 workouts per week, 3 max for optimal recovery.
      </p>

      <img
        src="https://cdn.shopify.com/s/files/1/1214/5580/files/Muscle_Group_Chest.jpg?v=1601050935"
        alt="Chest Workout"
        className="workout-image"
      />

      <div className="workout-tracker-section">
        <div className="workout-tracker-header">
          <h2>Workout Tracker</h2>
        </div>
        <div className="max-w-5xl mx-auto">
          <WorkoutCalendar muscleGroup="chest" />
        </div>
      </div>
    </div>
  );
}


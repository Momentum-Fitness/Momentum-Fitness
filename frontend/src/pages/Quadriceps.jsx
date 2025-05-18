import React, { useState } from 'react';
import WorkoutCalendar from '../components/WorkoutCalendar';

export default function Quadriceps() {
  const [showCompound, setShowCompound] = useState(false);
  const [showIsolation, setShowIsolation] = useState(false);

  return (
    <div className="muscle-page-container">
      <div className="muscle-page-header">
        <h1>Quadriceps</h1>
        <p className="muscle-page-description">
          The quadriceps are a group of four muscles located at the front of your thigh, responsible for extending the knee and stabilizing the hip.
        </p>
      </div>

      <div className="muscle-button-container">
        <button
          onClick={() => setShowCompound(!showCompound)}
          className={`muscle-button ${showCompound ? 'active' : ''}`}
        >
          <span className="muscle-button-icon">{showCompound ? '−' : '+'}</span>
          {showCompound ? 'Hide Compound' : 'Show Compound'}
        </button>

        <button
          onClick={() => setShowIsolation(!showIsolation)}
          className={`muscle-button ${showIsolation ? 'active' : ''}`}
        >
          <span className="muscle-button-icon">{showIsolation ? '−' : '+'}</span>
          {showIsolation ? 'Hide Isolation' : 'Show Isolation'}
        </button>
      </div>

      {showCompound && (
        <div className="muscle-content-panel active">
          <div className="muscle-content-header">
            <strong>Compound Exercises:</strong>
          </div>
          <div className="muscle-content-body">
            <ul className="exercise-list">
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Front Squats</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name"> Hack Squats</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Squats</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Leg Press</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {showIsolation && (
        <div className="muscle-content-panel active">
          <div className="muscle-content-header">
            <strong>Isolation Exercises:</strong>
          </div>
          <div className="muscle-content-body">
            <ul className="exercise-list">
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Leg Extensions</span>
              </li>

              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Wall Sits</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      <div className="muscle-page-description text-center">
        Recommended: 1-3 workouts per week, with a focus on 2 to avoid disproportionate quads.
      </div>

      <img
        src="https://static.wixstatic.com/media/23ac3b_1855a057e8bb49d0907fada55e43778a~mv2.png/v1/fill/w_428,h_413,al_c,lg_1,q_85/23ac3b_1855a057e8bb49d0907fada55e43778a~mv2.png"
        alt="Quadriceps Workout"
        className="workout-image"
      />

      <div className="workout-tracker-section">
        <div className="workout-tracker-header">
          <h2>Workout Tracker</h2>
        </div>
        <div className="max-w-5xl mx-auto">
          <WorkoutCalendar muscleGroup="quadriceps" />
        </div>
      </div>
    </div>
  );
}

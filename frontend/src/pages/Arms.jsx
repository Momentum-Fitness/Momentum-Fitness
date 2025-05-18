import React, { useState } from 'react';
import WorkoutCalendar from '../components/WorkoutCalendar';

export default function Arms() {
  const [showBiceps, setShowBiceps] = useState(false);
  const [showTriceps, setShowTriceps] = useState(false);
  const [showForearms, setShowForearms] = useState(false);

  return (
    <div className="muscle-page-container">
      <div className="muscle-page-header">
        <h1>Arm Workouts</h1>
        <p className="muscle-page-description">
          Your arms include biceps, triceps, and forearms, which are essential for pushing, pulling, and grip strength.
          Training these muscles improves both aesthetics and functional performance.
        </p>
      </div>

      <div className="muscle-button-container">
        <button
          onClick={() => setShowBiceps(!showBiceps)}
          className={`muscle-button ${showBiceps ? 'active' : ''}`}
        >
          <span className="muscle-button-icon">{showBiceps ? '−' : '+'}</span>
          {showBiceps ? 'Hide Biceps' : 'Show Biceps'}
        </button>

        <button
          onClick={() => setShowTriceps(!showTriceps)}
          className={`muscle-button ${showTriceps ? 'active' : ''}`}
        >
          <span className="muscle-button-icon">{showTriceps ? '−' : '+'}</span>
          {showTriceps ? 'Hide Triceps' : 'Show Triceps'}
        </button>

        <button
          onClick={() => setShowForearms(!showForearms)}
          className={`muscle-button ${showForearms ? 'active' : ''}`}
        >
          <span className="muscle-button-icon">{showForearms ? '−' : '+'}</span>
          {showForearms ? 'Hide Forearms' : 'Show Forearms'}
        </button>
      </div>

      {showBiceps && (
        <div className="muscle-content-panel active">
          <div className="muscle-content-header">
            <strong>Biceps Exercises</strong>
          </div>
          <div className="muscle-content-body">
            <ul className="exercise-list">
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Barbell Curls</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Dumbbell Curls</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Hammer Curls</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Overhand Grip Curls</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Focus Curls</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {showTriceps && (
        <div className="muscle-content-panel active">
          <div className="muscle-content-header">
            <strong>Triceps Exercises</strong>
          </div>
          <div className="muscle-content-body">
            <ul className="exercise-list">
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Cable Pull-downs</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Diamond Push-ups</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Dips</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Close-grip Bench Press</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Overhead Extensions</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Overhead Plate Extensions</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {showForearms && (
        <div className="muscle-content-panel active">
          <div className="muscle-content-header">
            <strong>Forearm Exercises</strong>
          </div>
          <div className="muscle-content-body">
            <ul className="exercise-list">
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Dumbbell Wrist Curls</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Barbell Wrist Curls</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Cable Wrist Curls</span>
              </li>
              <li className="exercise-item">
                <span className="exercise-bullet"></span>
                <span className="exercise-name">Rice Bucket Training</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      <img
        src="https://i.pinimg.com/474x/af/6e/e2/af6ee28277203710c59bb1d9e0f1cbfd.jpg"
        alt="Arms Workout"
        className="workout-image"
      />

      <div className="workout-tracker-section">
        <div className="workout-tracker-header">
          <h2>Workout Tracker</h2>
        </div>
        <div className="max-w-5xl mx-auto">
          <WorkoutCalendar muscleGroup="arms" />
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const muscleGroups = {
    "Upper Body": {
        "Back": {
            horizontal: ["Chest supported rows", "Seated cable rows", "Barbell rows", "Dumbbell rows"],
            vertical: ["Pull down machine", "Weighted pull up variations", "Chin-ups", "Lat pulldowns"]
        },
        "Chest": {
            horizontal: ["Bench Press (Barbell)", "Bench Press (Dumbbell)", "Push-ups", "Dips"],
            incline: ["Incline Bench Press (Barbell)", "Incline Bench Press (Dumbbell)", "Decline Push-ups"],
            isolation: ["Chest Fly (Dumbbell)", "Chest Fly (Cable)", "Pec Deck Machine"]
        },
        "Shoulders": {
            anterior: ["Military Press (Barbell)", "Shoulder Press (Dumbbell)", "Front Raises"],
            lateral: ["Lateral Raises", "Upright Rows", "Cable Lateral Raises"],
            posterior: ["Reverse Fly", "Face Pulls", "Bent-Over Lateral Raises"]
        },
        "Arms": {
            biceps: ["Barbell Curls", "Dumbbell Curls", "Hammer Curls", "Overhand Grip Curls", "Focus Curls"],
            triceps: ["Cable Pull-downs", "Diamond Push-ups", "Dips", "Close-grip Bench Press", "Overhead Extensions", "Overhead Plate Extensions"],
            forearms: ["Dumbbell Wrist Curls", "Barbell Wrist Curls", "Cable Wrist Curls", "Rice Bucket Training"]
        }
    },
    "Lower Body": {
        "Quadriceps": {
            compound: ["Back Squats", "Front Squats", "Bulgarian Split Squats", "Walking Lunges"],
            isolation: ["Leg Extensions", "Sissy Squats", "Wall Sits"]
        },
        "Hamstrings": {
            isolation: ["Lying Leg Curls", "Seated Leg Curls", "Nordic Curls", "Standing Leg Curls"],
            compound: ["Romanian Deadlifts", "Stiff-Leg Deadlifts", "Good Mornings", "Single-Leg Deadlifts"]
        },
        "Calves": {
            gastrocnemius: ["Standing Calf Raises", "Jump Rope", "Box Jumps"],
            soleus: ["Seated Calf Raises", "Single-Leg Calf Raises", "Eccentric Heel Drops"],
            variations: ["Machine Calf Raises", "Smith Machine Calf Raises", "Leg Press Calf Raises", "Donkey Calf Raises"]
        }
    },
    "Core": {
        "Abdominal": {
            upper: ["Crunches and sit-ups", "Russian twists", "Planks"],
            lower: ["Leg raises", "Reverse crunches", "Hanging knee raises"]
        }
    }
};

export default function WorkoutGenerator() {
    const navigate = useNavigate();
    const [duration, setDuration] = useState(30);
    const [difficulty, setDifficulty] = useState('Beginner');
    const [selectedMuscles, setSelectedMuscles] = useState([]);
    const [generatedWorkout, setGeneratedWorkout] = useState(null);
    const [selectionMode, setSelectionMode] = useState('single');
    const [savedWorkouts, setSavedWorkouts] = useState([]);

    const difficulties = {
        'Beginner': {
            sets: '2-3',
            reps: '10-12',
            rest: '90-120 seconds',
            intensity: 'Light to moderate weight (50-65% 1RM)'
        },
        'Intermediate': {
            sets: '3-4',
            reps: '8-12',
            rest: '60-90 seconds',
            intensity: 'Moderate to heavy weight (65-80% 1RM)'
        },
        'Advanced': {
            sets: '4-5',
            reps: '6-12',
            rest: '30-60 seconds',
            intensity: 'Heavy weight (75-85% 1RM)'
        }
    };

    const generateWorkout = () => {
        if (selectedMuscles.length === 0) {
            alert('Please select at least one muscle group');
            return;
        }

        let workout = {
            duration,
            difficulty,
            exercises: [],
            timePerExercise: Math.floor((duration * 60) / (selectedMuscles.length * 3)),
            date: new Date().toISOString(),
            id: Date.now()
        };

        selectedMuscles.forEach(muscleGroup => {
            const [category, muscle] = muscleGroup.split('.');
            const muscleData = muscleGroups[category][muscle];

            Object.values(muscleData).forEach(exercises => {
                const randomExercise = exercises[Math.floor(Math.random() * exercises.length)];
                workout.exercises.push({
                    name: randomExercise,
                    sets: difficulties[difficulty].sets,
                    reps: difficulties[difficulty].reps,
                    rest: difficulties[difficulty].rest,
                    intensity: difficulties[difficulty].intensity
                });
            });
        });

        setGeneratedWorkout(workout);
    };

    const saveWorkout = () => {
        if (generatedWorkout) {
            setSavedWorkouts([...savedWorkouts, generatedWorkout]);
            alert('Workout saved successfully!');
        }
    };

    const shareWorkout = () => {
        if (generatedWorkout) {
            const workoutText = `Check out my ${generatedWorkout.duration} minute ${generatedWorkout.difficulty} workout:\n\n` +
                generatedWorkout.exercises.map(ex =>
                    `${ex.name}\n- Sets: ${ex.sets}\n- Reps: ${ex.reps}\n- Rest: ${ex.rest}\n- Intensity: ${ex.intensity}\n`
                ).join('\n');

            navigator.clipboard.writeText(workoutText)
                .then(() => alert('Workout copied to clipboard!'))
                .catch(err => console.error('Failed to copy workout:', err));
        }
    };

    const handleMuscleSelection = (category, muscle) => {
        const muscleKey = `${category}.${muscle}`;
        if (selectionMode === 'single') {
            setSelectedMuscles([muscleKey]);
        } else {
            if (selectedMuscles.includes(muscleKey)) {
                setSelectedMuscles(selectedMuscles.filter(m => m !== muscleKey));
            } else {
                setSelectedMuscles([...selectedMuscles, muscleKey]);
            }
        }
    };

    return (
        <div className="workout-generator">
            <div className="workout-generator-container">
                <div className="workout-generator-header">
                    <h1>Personalized Workout Generator</h1>
                    <p>Create a customized workout plan tailored to your goals and preferences</p>
                </div>

                <div className="workout-config-grid">
                    <div className="workout-config-section">
                        <h2>Workout Duration</h2>
                        <div className="duration-slider">
                            <input
                                type="range"
                                min="10"
                                max="120"
                                step="10"
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)}
                            />
                            <div className="duration-display">{duration} minutes</div>
                        </div>
                    </div>

                    <div className="workout-config-section">
                        <h2>Difficulty Level</h2>
                        <select
                            className="difficulty-select"
                            value={difficulty}
                            onChange={(e) => setDifficulty(e.target.value)}
                        >
                            {Object.keys(difficulties).map(level => (
                                <option key={level} value={level}>{level}</option>
                            ))}
                        </select>
                    </div>

                    <div className="workout-config-section">
                        <h2>Selection Mode</h2>
                        <div className="selection-mode-buttons">
                            <button
                                className={`selection-mode-button ${selectionMode === 'single' ? 'active' : ''}`}
                                onClick={() => setSelectionMode('single')}
                            >
                                Single Muscle
                            </button>
                            <button
                                className={`selection-mode-button ${selectionMode === 'multiple' ? 'active' : ''}`}
                                onClick={() => setSelectionMode('multiple')}
                            >
                                Multiple Muscles
                            </button>
                        </div>
                    </div>
                </div>

                <div className="workout-config-section">
                    <h2>Target Muscle Groups</h2>
                    <div className="muscle-groups-grid">
                        {Object.entries(muscleGroups).map(([category, muscles]) => (
                            <div key={category}>
                                <h3 className="text-lg font-semibold mb-2">{category}</h3>
                                <div className="grid grid-cols-2 gap-2">
                                    {Object.keys(muscles).map(muscle => (
                                        <button
                                            key={muscle}
                                            onClick={() => handleMuscleSelection(category, muscle)}
                                            className={`muscle-group-button ${selectedMuscles.includes(`${category}.${muscle}`) ? 'selected' : ''
                                                }`}
                                        >
                                            {muscle}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button className="generate-button" onClick={generateWorkout}>
                    Generate Workout
                </button>

                {generatedWorkout && (
                    <div className="workout-result">
                        <div className="workout-result-header">
                            <h2 className="text-2xl font-bold">Your Personalized Workout Plan</h2>
                            <div>
                                <button className="action-button save-button" onClick={saveWorkout}>
                                    Save Workout
                                </button>
                                <button className="action-button share-button" onClick={shareWorkout}>
                                    Share Workout
                                </button>
                            </div>
                        </div>

                        <div className="workout-details-grid">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Workout Details</h3>
                                <ul className="space-y-2">
                                    <li>Duration: {duration} minutes</li>
                                    <li>Difficulty: {difficulty}</li>
                                    <li>Time per exercise: {generatedWorkout.timePerExercise} seconds</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-2">Selected Muscle Groups</h3>
                                <ul className="space-y-2">
                                    {selectedMuscles.map(muscle => (
                                        <li key={muscle}>{muscle.split('.')[1]}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="workout-exercise-grid">
                            {generatedWorkout.exercises.map((exercise, index) => (
                                <div key={index} className="exercise-card">
                                    <h4>{exercise.name}</h4>
                                    <ul>
                                        <li>Sets: {exercise.sets}</li>
                                        <li>Reps: {exercise.reps}</li>
                                        <li>Rest: {exercise.rest}</li>
                                        <li>Intensity: {exercise.intensity}</li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {savedWorkouts.length > 0 && (
                    <div className="saved-workouts">
                        <h2 className="text-2xl font-bold mb-4">Saved Workouts</h2>
                        <div className="saved-workout-grid">
                            {savedWorkouts.map(workout => (
                                <div key={workout.id} className="saved-workout-card">
                                    <h3 className="font-semibold">
                                        {new Date(workout.date).toLocaleDateString()} - {workout.difficulty}
                                    </h3>
                                    <p>{workout.duration} minutes</p>
                                    <p>{workout.exercises.length} exercises</p>
                                    <button
                                        onClick={() => setGeneratedWorkout(workout)}
                                        className="text-green-600 hover:text-green-700 mt-2"
                                    >
                                        View Details
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
} 
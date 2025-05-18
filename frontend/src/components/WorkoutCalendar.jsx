import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Modal from './Modal';

export default function WorkoutCalendar({ muscleGroup }) {
    const [events, setEvents] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedEvent, setSelectedEvent] = useState(null);

    // Form state
    const [workoutForm, setWorkoutForm] = useState({
        title: '',
        sets: '',
        reps: '',
        weight: '',
        notes: '',
    });

    const handleDateSelect = (selectInfo) => {
        setSelectedDate(selectInfo.startStr);
        setWorkoutForm({
            title: '',
            sets: '',
            reps: '',
            weight: '',
            notes: '',
        });
        setShowModal(true);
    };

    const handleEventClick = (clickInfo) => {
        setSelectedEvent(clickInfo.event);
        const eventData = clickInfo.event.extendedProps;
        setWorkoutForm({
            title: clickInfo.event.title,
            sets: eventData.sets || '',
            reps: eventData.reps || '',
            weight: eventData.weight || '',
            notes: eventData.notes || '',
        });
        setShowModal(true);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const eventData = {
            title: workoutForm.title,
            start: selectedDate,
            allDay: true,
            backgroundColor: '#07d700',
            borderColor: '#04a214',
            extendedProps: {
                muscleGroup,
                sets: workoutForm.sets,
                reps: workoutForm.reps,
                weight: workoutForm.weight,
                notes: workoutForm.notes,
            },
        };

        if (selectedEvent) {
            // Update existing event
            selectedEvent.remove();
        }

        setEvents([...events, eventData]);
        setShowModal(false);
    };

    const handleDelete = () => {
        if (selectedEvent) {
            selectedEvent.remove();
            setEvents(events.filter(event => event.id !== selectedEvent.id));
        }
        setShowModal(false);
    };

    return (
        <div className="workout-calendar">
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek'
                }}
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                events={events}
                select={handleDateSelect}
                eventClick={handleEventClick}
                height="auto"
            />

            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div className="workout-form">
                        <h2 className="text-xl font-bold mb-4">
                            {selectedEvent ? 'Edit Workout' : 'Add Workout'}
                        </h2>
                        <form onSubmit={handleFormSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">Exercise</label>
                                <input
                                    type="text"
                                    value={workoutForm.title}
                                    onChange={(e) => setWorkoutForm({ ...workoutForm, title: e.target.value })}
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-3 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Sets</label>
                                    <input
                                        type="number"
                                        value={workoutForm.sets}
                                        onChange={(e) => setWorkoutForm({ ...workoutForm, sets: e.target.value })}
                                        className="w-full p-2 border rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Reps</label>
                                    <input
                                        type="number"
                                        value={workoutForm.reps}
                                        onChange={(e) => setWorkoutForm({ ...workoutForm, reps: e.target.value })}
                                        className="w-full p-2 border rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Weight (lbs)</label>
                                    <input
                                        type="number"
                                        value={workoutForm.weight}
                                        onChange={(e) => setWorkoutForm({ ...workoutForm, weight: e.target.value })}
                                        className="w-full p-2 border rounded"
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">Notes</label>
                                <textarea
                                    value={workoutForm.notes}
                                    onChange={(e) => setWorkoutForm({ ...workoutForm, notes: e.target.value })}
                                    className="w-full p-2 border rounded"
                                    rows="3"
                                />
                            </div>
                            <div className="flex justify-end gap-2">
                                {selectedEvent && (
                                    <button
                                        type="button"
                                        onClick={handleDelete}
                                        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                                    >
                                        Delete
                                    </button>
                                )}
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                >
                                    {selectedEvent ? 'Update' : 'Add'} Workout
                                </button>
                            </div>
                        </form>
                    </div>
                </Modal>
            )}
        </div>
    );
} 
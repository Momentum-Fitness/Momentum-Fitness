import React, { useState } from 'react';
import { createPost } from '../adapters/Post-adaptors'
import { useNavigate } from 'react-router-dom';

const CreateEvent = ({ }) => {
  const [event_title, setEventTitle] = useState('');
  const [event_info, setEventInfo] = useState('');


  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!eventTitle || !eventDate || !volunteersNeeded) {
    //   alert("Please fill out all required fields.");
    //   return;
    // }

    console.log("Form submitted with data:", {
      event_title,
      event_info,

    });

    const [post, error] = await createPost({ event_title, event_info, });
    navigate(`/event-feed`);

    if (error) return setErrorText(error.message);


  };



  return (
    <form onSubmit={handleSubmit}>
      <h3 align="center">Create A Post</h3>

      <p align="center">
        It all starts with a goal. Users can Post their workouts, track progress, and fitness milestones, detailing their exercises, reps, sets, and more to stay motivated and achieve their fitness aspirations.
      </p>

      <label htmlFor="event-title"><b>Post Title:</b></label>
      <input
        type="text"
        id="event-title"
        placeholder="Post title here!"
        value={event_title}
        onChange={e => setEventTitle(e.target.value)}
        required
      />

      <label htmlFor="event-info"><b>Write a caption for your Post :</b></label>
      <textarea
        id="event-info"
        placeholder="Tell us about your workout. Sets,weight,reps etc!"
        value={event_info}
        onChange={e => setEventInfo(e.target.value)}
      />
      {/* <img className='aboutImg' src='https://'></img> */}
      <div>

      </div>
      <button type="submit"><b>Submit</b></button>
    </form>
  );
};

export default CreateEvent;

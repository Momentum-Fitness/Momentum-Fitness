import React from 'react';
import { NavLink } from "react-router-dom";

export default function LowerBody() {
    const muscleGroups = [
      { name: "Calves", path: "/lower-body/calves", img: "path-to-calves-image.jpg" },
      { name: "Glutes & Hamstrings", path: "/lower-body/hamstrings", img: "path-to-hamstrings-image.jpg" },
      { name: "Quads", path: "/lower-body/quadriceps", img: "path-to-quads-image.jpg" },
    ];
  
    return (
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Lower Body Workouts</h2>
          <p className="text-gray-600">Select a muscle group to explore targeted exercises.</p>
        </div>
  
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-10">
          {muscleGroups.map((muscle, index) => (
            <NavLink
              key={index}
              to={muscle.path}
              className="block bg-white rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105 p-6"
            >
              <img src={muscle.img} alt={muscle.name} className="w-full h-40 object-cover rounded-xl" />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">{muscle.name}</h3>
            </NavLink>
          ))}
        </div>
      </div>
    );
  }
  

import React from 'react';
import { NavLink } from "react-router-dom";

export default function UpperBody() {
  const muscleGroups = [
    { name: "Abs", path: "/upper-body/abdominal", img: "https://getrealfitnessblog.wordpress.com/wp-content/uploads/2013/11/abdominals.jpg" },
    { name: "Arms", path: "/upper-body/arms", img: "https://i.pinimg.com/474x/af/6e/e2/af6ee28277203710c59bb1d9e0f1cbfd.jpg" },
    { name: "Back", path: "/upper-body/back", img: "path-to-back-image.jpg" },
    { name: "Chest", path: "/upper-body/chest", img: "https://cdn.shopify.com/s/files/1/1214/5580/files/Muscle_Group_Chest.jpg?v=1601050935" },
    { name: "Shoulders", path: "/upper-body/shoulders", img: "https://getrealfitnessblog.wordpress.com/wp-content/uploads/2013/11/abdominals.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Upper Body Workouts</h2>
        <p className="text-gray-600">Select a muscle group to explore targeted exercises below:</p>
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


// import React from 'react';
// import { NavLink } from "react-router-dom";

// export default function LowerBody() {
//     const muscleGroups = [
//       { name: "Calves", path: "/lower-body/calves", img: "path-to-calves-image.jpg" },
//       { name: "Glutes & Hamstrings", path: "/lower-body/hamstrings", img: "path-to-hamstrings-image.jpg" },
//       { name: "Quads", path: "/lower-body/quadriceps", img: "path-to-quads-image.jpg" },
//     ];
  
//     return (
//       <div className="min-h-screen bg-gray-100 py-10">
//         <div className="max-w-5xl mx-auto text-center">
//           <h2 className="text-4xl font-bold text-gray-800 mb-6">Lower Body Workouts</h2>
//           <p className="text-gray-600">Select a muscle group to explore targeted exercises.</p>
//         </div>
  
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-10">
//           {muscleGroups.map((muscle, index) => (
//             <NavLink
//               key={index}
//               to={muscle.path}
//               className="block bg-white rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105 p-6"
//             >
//               <img src={muscle.img} alt={muscle.name} className="w-full h-40 object-cover rounded-xl" />
//               <h3 className="text-xl font-semibold text-gray-800 mt-4">{muscle.name}</h3>
//             </NavLink>
//           ))}
//         </div>
//       </div>
//     );
//   }
  

import React from 'react';
import { NavLink } from "react-router-dom";

export default function LowerBody() {
  const muscleGroups = [
    {
      name: "Calves",
      path: "/lower-body/calves",
      img: "https://files.mtstatic.com/site_4463/51935/0?Expires=1739480868&Signature=sb8Wt3Wu6swD5Q49W25ZGz-MnYGiM~VvGU4tKJVpl-exz5Wlay5oz2yebX2nO7t95hsjQK7JhDxD8UOu5p2ruDpsa23Wou6Jct-f2DxWB2LYiQihp37HcZN558oQKinBBbZvIqIxlVx3TnZ5ZZOGhl-etbxZwbZP7dWm3QfxYGA_&Key-Pair-Id=APKAJ5Y6AV4GI7A555NA",
      description: "Strengthen your calves for better balance and endurance."
    },
    {
      name: "Glutes & Hamstrings",
      path: "/lower-body/hamstrings",
      img: "https://www.floridaortho.com/wp-content/uploads/leg-muscles.jpg",
      description: "Target glutes and hamstrings for power and stability."
    },
    {
      name: "Quads",
      path: "/lower-body/quadriceps",
      img: "https://static.wixstatic.com/media/23ac3b_1855a057e8bb49d0907fada55e43778a~mv2.png/v1/fill/w_428,h_413,al_c,lg_1,q_85/23ac3b_1855a057e8bb49d0907fada55e43778a~mv2.png",
      description: "Develop strong quads to improve leg strength and mobility."
    },
  ];

  return (
    <div className="lower-body-container">
      <div className="header">
        <h1>Lower Body Workouts</h1>
        <h2>Select a muscle group to explore targeted exercises.</h2>
      </div>

      <div className="muscle-grid">
        {muscleGroups.map((muscle, index) => (
          <NavLink key={index} to={muscle.path} className="muscle-card">
            <img src={muscle.img} alt={muscle.name} className="muscle-image" />
            <h3 className="muscle-name">{muscle.name}</h3>
            <p className="muscle-description">{muscle.description}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
}


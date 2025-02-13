// import React, { useState } from 'react';
// import { NavLink } from "react-router-dom";

// export default function UpperBody() {
//   const muscleGroups = [
//     {
//       name: "Abs",
//       path: "/upper-body/abdominal",
//       img: "https://getrealfitnessblog.wordpress.com/wp-content/uploads/2013/11/abdominals.jpg",
//       description: "Strengthen your core with targeted abdominal workouts."
//     },
//     {
//       name: "Arms",
//       path: "/upper-body/arms",
//       img: "https://i.pinimg.com/474x/af/6e/e2/af6ee28277203710c59bb1d9e0f1cbfd.jpg",
//       description: "Improve arm definition with effective exercises."
//     },
//     {
//       name: "Back",
//       path: "/upper-body/back",
//       img: "https://media.geeksforgeeks.org/wp-content/uploads/20240423132457/Diagram-of-back-muscles.webp",
//       description: "Build a strong and stable back for better posture."
//     },
//     {
//       name: "Chest",
//       path: "/upper-body/chest",
//       img: "https://cdn.shopify.com/s/files/1/1214/5580/files/Muscle_Group_Chest.jpg?v=1601050935",
//       description: "Develop chest muscles for upper body strength."
//     },
//     {
//       name: "Shoulders",
//       path: "/upper-body/shoulders",
//       img: "https://cdn.britannica.com/36/113036-050-913798F2/Muscles-shoulder.jpg",
//       description: "Enhance shoulder mobility and strength."
//     },
//   ];

//   // State to track user progress
//   const [progress, setProgress] = useState({});

//   const toggleCompletion = (muscle) => {
//     setProgress(prev => ({
//       ...prev,
//       [muscle]: !prev[muscle]
//     }));
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 py-12 text-white">
//       <div className="max-w-5xl mx-auto text-center">
//         <h1 className="text-5xl font-extrabold mb-4 animate-fade-in">Upper Body Workouts</h1>
//         <h2 className="text-gray-300 text-lg">Select a muscle group to explore targeted exercises and track your progress</h2>
//       </div>
// <div>
  
// </div>
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
//         {muscleGroups.map((muscle, index) => (
//           <div key={index} className="relative bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105 p-6 overflow-hidden group">
//             <NavLink to={muscle.path}>
//               <div className="relative h-48 overflow-hidden rounded-xl">       
//                      <h3 className="text-2xl font-semibold mt-4 text-center transition-all duration-300 group-hover:text-yellow-400">{muscle.name}</h3>

//                 <img
//                   alt={muscle.name}
//                   src={muscle.img}
//                   className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-opacity"></div>
//               </div>
//             </NavLink>
//               <h4 className="text-gray-400 text-sm text-center mt-2">{muscle.description}</h4>

// <div> </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

export default function UpperBody() {
  const muscleGroups = [
    {
      name: "Abs",
      path: "/upper-body/abdominal",
      img: "https://getrealfitnessblog.wordpress.com/wp-content/uploads/2013/11/abdominals.jpg",
      description: "Strengthen your core with targeted abdominal workouts."
    },
    {
      name: "Arms",
      path: "/upper-body/arms",
      img: "https://i.pinimg.com/474x/af/6e/e2/af6ee28277203710c59bb1d9e0f1cbfd.jpg",
      description: "Improve arm definition with effective exercises."
    },
    {
      name: "Back",
      path: "/upper-body/back",
      img: "https://media.geeksforgeeks.org/wp-content/uploads/20240423132457/Diagram-of-back-muscles.webp",
      description: "Build a strong and stable back for better posture."
    },
    {
      name: "Chest",
      path: "/upper-body/chest",
      img: "https://cdn.shopify.com/s/files/1/1214/5580/files/Muscle_Group_Chest.jpg?v=1601050935",
      description: "Develop chest muscles for upper body strength."
    },
    {
      name: "Shoulders",
      path: "/upper-body/shoulders",
      img: "https://cdn.britannica.com/36/113036-050-913798F2/Muscles-shoulder.jpg",
      description: "Enhance shoulder mobility and strength."
    },
  ];

  return (
    <div className="upper-body-container">
      <div className="header">
        <h1>Upper Body Workouts</h1>
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


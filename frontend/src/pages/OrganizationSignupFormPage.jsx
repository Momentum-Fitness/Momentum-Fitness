import React, { useState } from 'react';
import { createOrganization } from '../adapters/signup-adapter';
import { useNavigate } from "react-router-dom";


export default function OrganizationSignupForm() {
  const [heardAbout, setHeardAbout] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bio, setBio] = useState('');
  const [goal, setGoal] = useState('');

  const navigate = useNavigate(); //

  const handleSubmit =  async (e) => {
    e.preventDefault();
    navigate(`/event-feed`);//

    console.log("Form submitted with data:", {
      username,
      password,
      gender,
      height,
      weight,
      bio,
      goal,
      canPostOpportunities: true ,
    });
    const [organization, error] = await createOrganization({ heardAbout,username,password,gender,height,weight,bio,goal});
   if (error) return setErrorText(error.message);


  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 align="center">Sign-Up</h2>
      <p align="center">
        Momentum Fitness aims to make your workout more efficent and convenient.
      </p>

      {/* <label><b>How did you find Momentum Fitness?</b></label>
      <input
        type="text"
        value={heardAbout}
        onChange={(e) => setHeardAbout(e.target.value)}
        required
      /> */}

      <label><b>Username:</b></label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <label><b>Password:</b></label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

{/* <label><b>Gender:</b></label>
      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        required
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      
      <label><b>What's Your height?:</b></label>
      <input
        type="Height"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        required
      />

      <label><b>Whats your weight?:</b></label>
      <input
        type="Weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        required
      />

      <label> <b>Bio:</b></label>
      <textarea
      type="Tell us a little about you"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        required
      />


      <label><b>Primary Fitness Goal:</b></label>
      <select
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        required
      >
        <option value="weightLoss">Weight Loss</option>
        <option value="muscleGain">Muscle Gain</option>
        <option value="endurance">Endurance</option>
        <option value="generalFitness">General Fitness</option>
        <option value="other">other</option>
 */}
      {/* </select> */}

      <p></p>
      <button type="submit"><b>Sign Up !</b></button>
    </form>
  );
}



// import React, { useState } from 'react';

// export default function OrganizationSignupForm() {
//   const [organizationDetails, setOrganizationDetails] = useState({
//     heardAbout: '',
//     username: '',
//     password: '',
//     orgName: '',
//     aboutOrg: '',
//     address: '',
//     zip: '',
//     cause: '',
//     canPostOpportunities: true, // Lets org post opportunities
    
  
    
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     console.log(e.target);
//     setOrganizationDetails({ ...organizationDetails, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // form submission logic 
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2 align="center">
//         Organization Sign-Up
//         </h2>
        
//       <p align="center">
//          Lend A Hand aims to make volunteering more accessible and convenient.
//     </p>
//       <label>How did you hear about Lend A Hand?</label>
//       <input type="text" name="heardAbout" onChange={handleChange} required />

//       <label>Username</label>
//       <input type="text" name="username" onChange={handleChange} required />

//       <label>Password</label>
//       <input type="password" name="password" onChange={handleChange} required />

//       <label>Organization Name</label>
//       <input type="text" name="orgName" onChange={handleChange} required />

//       <label>About the Organization</label>
//       <textarea name="aboutOrg" onChange={handleChange} required />

//       <label>Address</label>
//       <input type="text" name="address" onChange={handleChange} required />

//       <label>Zip Code</label>
//       <input type="text" name="zip" onChange={handleChange} required />

//       <label>Cause Supported</label>
//       <select name="cause" onChange={handleChange} required>
//         <option value="education">Education</option>
//         <option value="homelessness">Homelessness</option>
//         <option value="environmental">Environmental Conservation</option>
//         <option value="animal">Animal Welfare</option>
//       </select>
// <p></p>
//       <button type="submit">Sign Up as Organization</button>
//     </form>
//   );
// }

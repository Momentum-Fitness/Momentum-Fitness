// import { NavLink } from "react-router-dom";
// import { useContext } from "react";
// import CurrentUserContext from "../contexts/current-user-context";
// import logo from "../Assets/logo.png"
// import { Link } from "react-router-dom";

// export default function SiteHeadingAndNav() {
//   const { currentUser } = useContext(CurrentUserContext);

//   return <header>
//     <h1 align="center" >
//        Momentum Fitness 
//     </h1>

//     <img src={logo} alt="Logo" style={{ height: '80px', width: "150px", marginRight: '20px' }} />

//     <nav>
//       <ul>


//         <li><NavLink to='/'>Home</NavLink></li>

//         {
//           currentUser
//             ? <>
//               <li><NavLink to='/' end={true}>Upper Body </NavLink></li>
//               <li><NavLink to='/' end={true}>Lower Body</NavLink></li>
//               <li><NavLink to='/event-feed' end={true}>Preview post</NavLink></li>
//               <li><NavLink to='/news' end={true}> Post Workout</NavLink></li>
//               <li><Link to='/AboutUsPage'> About Us</Link></li>  
//               <li><NavLink to='/create-event' end={true}>Create Post</NavLink></li>
//               <li><NavLink to='/users' end={true}>Users</NavLink></li>
//               <li><NavLink to={`/users/${currentUser.id}`}>{currentUser.username}</NavLink></li>


//             </>
//             : <>
//               <li><NavLink to='/login'>Log In</NavLink></li>
//               <li><NavLink to='/sign-up'> Sign Up</NavLink></li>
//               <li><NavLink to='/AboutUsPage'> About Us</NavLink></li>
//               <li><NavLink to='/news'> Post Workout</NavLink></li>

//             </>
//         }
//       </ul>
//     </nav>
//   </header>;

// }



// import { NavLink } from "react-router-dom";
// import { useContext, useState } from "react";
// import CurrentUserContext from "../contexts/current-user-context";
// import logo from "../Assets/logo.png";

// export default function SiteHeadingAndNav() {
//   const { currentUser } = useContext(CurrentUserContext);
//   const [upperBodyOpen, setUpperBodyOpen] = useState(false);
//   const [lowerBodyOpen, setLowerBodyOpen] = useState(false);

//   return (
//     <header>
//       <h1 align="center">Momentum Fitness</h1>

//       <img src={logo} alt="Logo" style={{ height: "80px", width: "150px", marginRight: "20px" }} />

//       <nav>
//         <ul>
//           <li><NavLink to="/home">Home</NavLink></li>

//           {currentUser ? (
//             <>
//               {/* Upper Body Dropdown */}
//               <li className="dropdown" onMouseEnter={() => setUpperBodyOpen(true)} onMouseLeave={() => setUpperBodyOpen(false)}>
//                  <NavLink to="/upper-body">Upper Body ▾</NavLink>
//                 {upperBodyOpen && (
//                   <ul className="dropdown-menu">
//                     <li><NavLink to="/upper-body/abdominal">Abs</NavLink></li>
//                     <li><NavLink to="/upper-body/arms">Arms</NavLink></li>
//                     <li><NavLink to="/upper-body/back">Back</NavLink></li>
//                     <li><NavLink to="/upper-body/chest">Chest</NavLink></li>
//                     <li><NavLink to="/upper-body/shoulders">Shoulders</NavLink></li>
//                   </ul>
//                 )}
//               </li>

//               {/* Lower Body Dropdown */}
//               <li className="dropdown" onMouseEnter={() => setLowerBodyOpen(true)} onMouseLeave={() => setLowerBodyOpen(false)}>
//                <NavLink to="/lower-body">Lower Body ▾</NavLink>
//                 {lowerBodyOpen && (
//                   <ul className="dropdown-menu">
//                     <li><NavLink to="/lower-body/calves">Calves</NavLink></li>
//                     <li><NavLink to="/lower-body/hamstrings">Glutes & Hamstrings</NavLink></li>
//                     <li><NavLink to="/lower-body/quadriceps">Quads</NavLink></li>
//                   </ul>
//                 )}
//               </li>

//               <li><NavLink to="/event-feed">Preview Post</NavLink></li>
//               <li><NavLink to="/news">Post Workout</NavLink></li>
//               <li><NavLink to="/create-event">Create Post</NavLink></li>
//               <li><NavLink to="/users">Users</NavLink></li>
//               <li><NavLink to={`/users/${currentUser.id}`}>{currentUser.username}</NavLink></li>
//             </>
//           ) : (
//             <>
//               <li><NavLink to="/login">Log In</NavLink></li>
//               <li><NavLink to="/sign-up">Sign Up</NavLink></li>
//               <li><NavLink to="/news">Post Workout</NavLink></li>
//             </>
//           )}
//         </ul>
//       </nav>
//     </header>
//   );
// }


import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import logo from "../Assets/logo.png";

export default function SiteHeadingAndNav() {
  const { currentUser } = useContext(CurrentUserContext);
  const [upperBodyOpen, setUpperBodyOpen] = useState(false);
  const [lowerBodyOpen, setLowerBodyOpen] = useState(false);

  return (
    <header>
      <h1 align="center">Momentum Fitness</h1>

      <img src={logo} alt="Logo" style={{ height: "80px", width: "150px", marginRight: "20px" }} />

      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>

          {currentUser ? (
            <>
              {/* Upper Body Dropdown */}
              <li
                className="dropdown"
                onMouseEnter={() => setUpperBodyOpen(true)}
                onMouseLeave={() => setUpperBodyOpen(false)}
              >
                <NavLink to="/upper-body">Upper Body ▾</NavLink>
                {upperBodyOpen && (
                  <ul className="dropdown-menu">
                    <li><NavLink to="/upper-body/abdominal">Abs</NavLink></li>
                    <li><NavLink to="/upper-body/arms">Arms</NavLink></li>
                    <li><NavLink to="/upper-body/back">Back</NavLink></li>
                    <li><NavLink to="/upper-body/chest">Chest</NavLink></li>
                    <li><NavLink to="/upper-body/shoulders">Shoulders</NavLink></li>
                  </ul>
                )}
              </li>

              {/* Lower Body Dropdown */}
              <li
                className="dropdown"
                onMouseEnter={() => setLowerBodyOpen(true)}
                onMouseLeave={() => setLowerBodyOpen(false)}
              >
                <NavLink to="/lower-body">Lower Body ▾</NavLink>
                {lowerBodyOpen && (
                  <ul className="dropdown-menu">
                    <li><NavLink to="/lower-body/calves">Calves</NavLink></li>
                    <li><NavLink to="/lower-body/hamstrings">Glutes & Hamstrings</NavLink></li>
                    <li><NavLink to="/lower-body/quadriceps">Quads</NavLink></li>
                  </ul>
                )}
              </li>

              <li><NavLink to="/event-feed">Preview Post</NavLink></li>
              <li><NavLink to="/news">Post Workout</NavLink></li>
              <li><NavLink to="/create-event">Create Post</NavLink></li>
              <li><NavLink to="/users">Users</NavLink></li>
              <li><NavLink to={`/users/${currentUser.id}`}>{currentUser.username}</NavLink></li>
            </>
          ) : (
            <>
              <li><NavLink to="/login">Log In</NavLink></li>
              <li><NavLink to="/sign-up">Sign Up</NavLink></li>
              <li><NavLink to="/news">Post Workout</NavLink></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import Sidebar from "./Sidebar";
import logo from "../assets/logo.png";

export default function SiteHeadingAndNav() {
  const { currentUser } = useContext(CurrentUserContext);
  const [upperBodyOpen, setUpperBodyOpen] = useState(false);
  const [lowerBodyOpen, setLowerBodyOpen] = useState(false);

  return (
    <>
      <header>
        <NavLink to="/" id="logo">
          Momentum
        </NavLink>
        {/* <img src={logo} alt="Momentum Fitness Logo" style={{ height: '40px', marginRight: '10px' }} /> */}

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

                <li><NavLink to="/workout-generator">Workout Generator</NavLink></li>
                <li><NavLink to="/create-event">Create Post</NavLink></li>
                <li><NavLink to="/news">Post Workout</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
              </>
            ) : (
              <>
                <li><NavLink to="/login">Log In</NavLink></li>
                <li><NavLink to="/sign-up">Sign Up</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
              </>
            )}
          </ul>
        </nav>
      </header>
      <Sidebar />
    </>
  );
}

import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import logo from "../Assets/logo.png"

export default function SiteHeadingAndNav() {
  const { currentUser } = useContext(CurrentUserContext);

  return <header>
    <h1 align="center" >
       Momentum Fitness 
    </h1>

    <img src={logo} alt="Logo" style={{ height: '80px', width: "150px", marginRight: '20px' }} />

    <nav>
      <ul>


        <li><NavLink to='/'>Home</NavLink></li>

        {
          currentUser
            ? <>
              <li><NavLink to='/event-feed' end={true}>Upper Body </NavLink></li>
              <li><NavLink to='/event-feed' end={true}>Lower Body</NavLink></li>
              <li><NavLink to='/news' end={true}> Post Workout</NavLink></li>
              <li><NavLink to='/about'> About Us</NavLink></li>  
              <li><NavLink to='/create-event' end={true}>Create Post</NavLink></li>
              <li><NavLink to='/users' end={true}>Users</NavLink></li>
              <li><NavLink to={`/users/${currentUser.id}`}>{currentUser.username}</NavLink></li>

      
            </>
            : <>
              <li><NavLink to='/login'>Log In</NavLink></li>
              <li><NavLink to='/sign-up'> Sign Up</NavLink></li>
              <li><NavLink to='/'> About Us</NavLink></li>
              <li><NavLink to='/'> Post Workout</NavLink></li>

            </>
        }
      </ul>
    </nav>
  </header>;

}

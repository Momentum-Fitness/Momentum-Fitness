
// // import { useContext, useEffect } from 'react';
// // import { Routes, Route } from 'react-router-dom';
// // import Home from './pages/Home';
// // //// import SignUpPage from './pages/SignUpPage'; 
// // import LoginPage from './pages/Login';
// // import SiteHeadingAndNav from './components/SiteHeadingAndNav';
// // import NotFoundPage from './pages/NotFound';
// // import UserContext from './contexts/current-user-context';
// // import { checkForLoggedInUser } from './adapters/auth-adapter';
// // import UsersPage from './pages/Users';
// // import UserPage from './pages/User';
// // import CreateEvent from './components/CreateEvent';
// // import OrganizationSignupForm from './pages/OrganizationSignupFormPage'; // Import Organization form
// // import VolunteerSignupForm from './pages/VolunteerSignupFormPage'; // Import Volunteer form
// // import SiteFooter from './components/SiteFooter';
// // import NewsPage from './pages/NewsPage';
// // import EventFeed from './pages/EventFeedPage'

// // export default function App() {
// //   const { setCurrentUser } = useContext(UserContext);



// //   useEffect(() => {
// //     checkForLoggedInUser().then(setCurrentUser);
// //   }, [setCurrentUser]);

// //   return (
// //     <>
// //       <SiteHeadingAndNav />
// //       <main>
// //         <Routes>
// //           <Route path='/' element={<Home />} />
// //           <Route path='/login' element={<LoginPage />} />
// //           {/* <Route path='/sign-up' element={<SignUpPage />} />  */}
// //           <Route path='/sign-up/organization' element={<OrganizationSignupForm />} /> {/* Route for Organization sign-up */}
// //           <Route path='/sign-up/volunteer' element={<VolunteerSignupForm />} /> {/*Route for Volunteer sign-up*/}
// //           <Route path='/users' element={<UsersPage />} />
// //           <Route path='/users/:id' element={<UserPage />} />
// //           <Route path='/create-event' element={<CreateEvent />} />
// //           <Route path='/news' element={<NewsPage />} />
// //           <Route path='/event-feed' element={<EventFeed />} />

// //           <Route path='*' element={<NotFoundPage />} />
// //         </Routes>
// //       </main>
// //       <SiteFooter />
// //     </>
// //   );
// // }


// import { Routes, Route } from 'react-router-dom';
// import UpperBodyPage from './pages/UpperBodyPage';
// import LowerBodyPage from './pages/LowerBodyPage';
// import Home from './pages/Home';
// import LoginPage from './pages/Login';
// import SiteHeadingAndNav from './components/SiteHeadingAndNav';
// import NotFoundPage from './pages/NotFound';
// import UserContext from './contexts/current-user-context';
// import { useContext, useEffect } from 'react';
// import { checkForLoggedInUser } from './adapters/auth-adapter';
// import UsersPage from './pages/Users';
// import UserPage from './pages/User';
// import CreateEvent from './components/CreateEvent';
// import OrganizationSignupForm from './pages/OrganizationSignupFormPage';
// import VolunteerSignupForm from './pages/VolunteerSignupFormPage';
// import SiteFooter from './components/SiteFooter';
// import NewsPage from './pages/NewsPage';
// import EventFeed from './pages/EventFeedPage';

// export default function App() {
//   const { setCurrentUser } = useContext(UserContext);



//   useEffect(() => {
//     checkForLoggedInUser().then(setCurrentUser);
//   }, [setCurrentUser]);

//   return (
//     <>
//       <SiteHeadingAndNav />
//       <main>
//         <Routes>
//           <Route path='/home' element={<Home />} />
//           <Route path='/login' element={<LoginPage />} />
//           <Route path='/sign-up/organization' element={<OrganizationSignupForm />} />
//           <Route path='/sign-up/volunteer' element={<VolunteerSignupForm />} />
//           <Route path='/users' element={<UsersPage />} />
//           <Route path='/users/:id' element={<UserPage />} />
//           <Route path='/create-event' element={<CreateEvent />} />
//           <Route path='/news' element={<NewsPage />} />
//           <Route path='/event-feed' element={<EventFeed />} />
//           <Route path='/upper-body' element={<UpperBodyPage />} />
//           <Route path='/lower-body' element={<LowerBodyPage />} />

//           <Route path='*' element={<NotFoundPage />} />
//         </Routes>
//       </main>
//       <SiteFooter />
//     </>
//   );
// }


import { Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import SiteHeadingAndNav from "./components/SiteHeadingAndNav";
import NotFoundPage from "./pages/NotFound";
import UserContext from "./contexts/current-user-context";
import { checkForLoggedInUser } from "./adapters/auth-adapter";
import UsersPage from "./pages/Users";
import UserPage from "./pages/User";
import CreateEvent from "./components/CreateEvent";
import OrganizationSignupForm from "./pages/OrganizationSignupFormPage";
import VolunteerSignupForm from "./pages/VolunteerSignupFormPage";
import SiteFooter from "./components/SiteFooter";
import NewsPage from "./pages/NewsPage";
import EventFeed from "./pages/EventFeedPage";

// Workout pages
import UpperBodyPage from "./pages/UpperBodyPage";
import LowerBodyPage from "./pages/LowerBodyPage";

// Upper Body Muscle Groups
import AbsPage from "./pages/Abdominal";
import ArmsPage from "./pages/Arms";
import BackPage from "./pages/Back";
import ChestPage from "./pages/Chest";
import ShouldersPage from "./pages/Shoulders";

// Lower Body Muscle Groups
import CalvesPage from "./pages/Calves";
import HamstringsPage from "./pages/Hamstring";
import QuadsPage from "./pages/Quadriceps";

export default function App() {
  const { setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    checkForLoggedInUser().then(setCurrentUser);
  }, [setCurrentUser]);

  return (
    <>
      <SiteHeadingAndNav />
      <main>
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />

          {/* Authentication Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up/organization" element={<OrganizationSignupForm />} />
          <Route path="/sign-up/volunteer" element={<VolunteerSignupForm />} />

          {/* User Routes */}
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<UserPage />} />

          {/* Event & News Routes */}
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/event-feed" element={<EventFeed />} />

          {/* Upper Body Routes */}
          <Route path="/upper-body" element={<UpperBodyPage />} />
          <Route path="/upper-body/abdominal" element={<AbsPage />} />
          <Route path="/upper-body/arms" element={<ArmsPage />} />
          <Route path="/upper-body/back" element={<BackPage />} />
          <Route path="/upper-body/chest" element={<ChestPage />} />
          <Route path="/upper-body/shoulders" element={<ShouldersPage />} />

          {/* Lower Body Routes */}
          <Route path="/lower-body" element={<LowerBodyPage />} />
          <Route path="/lower-body/calves" element={<CalvesPage />} />
          <Route path="/lower-body/hamstrings" element={<HamstringsPage />} />
          <Route path="/lower-body/quadriceps" element={<QuadsPage />} />

          {/* 404 Page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <SiteFooter />
    </>
  );
}

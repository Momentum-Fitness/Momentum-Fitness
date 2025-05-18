import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="sidebar-toggle"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {isOpen ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <path d="M3 12h18M3 6h18M3 18h18" />
          )}
        </svg>
      </button>

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>Dashboard</h2>
        </div>

        <div className="sidebar-content">
          <section className="sidebar-section">
            <h3>Users</h3>
            <div className="user-preview">
              <Link to="/users">My Profile</Link>



            </div>
            <div className="user-preview">
              <Link to="/settings">Settings</Link>
            </div>
          </section>

          <section className="sidebar-section">
            <h3>Preview Posts</h3>
            <div className="post-preview">
              <h4>Latest Workout</h4>
              <p>Check out my new PR!</p>
            </div>
            <div className="post-preview">
              <h4>Upcoming Event</h4>
              <p>Join our fitness challenge</p>
            </div>
          </section>
        </div>
      </aside>
    </>
  );
} 
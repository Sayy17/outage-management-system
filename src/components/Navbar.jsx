import React from 'react';
import { Menu, X, Bell } from 'lucide-react';
import './Navbar.css';

function Navbar({ sidebarOpen, setSidebarOpen, currentPage, user }) {
  // Extract user initials from email or display name
  const getUserInitials = () => {
    if (user && user.email) {
      return user.email.substring(0, 2).toUpperCase();
    }
    return 'WN';
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="navbar-toggle-btn"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="navbar-right">
        <div className="navbar-status">
          <div className="status-dot"></div>
          <span className="status-text">LIVE</span>
        </div>

        <button className="navbar-notification-btn">
          <Bell size={20} color="#4b5563" />
        </button>

        <div className="navbar-user">
          <div className="navbar-user-info">
            <p className="navbar-user-name">
              HELLO, {user ? user.email.split('@')[0].toUpperCase() : 'ADMIN'}
            </p>
            <p className="navbar-user-role">Admin</p>
          </div>
          <div className="navbar-user-avatar">
            {getUserInitials()}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
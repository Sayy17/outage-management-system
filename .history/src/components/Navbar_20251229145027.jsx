import React from 'react';
import { Menu, X, Bell } from 'lucide-react';
import './Navbar.css';

function Navbar({ sidebarOpen, setSidebarOpen, currentPage }) {
  const pageNames = {
    overview: 'Overview',
    analytics: 'Analytics',
    resources: 'Resources',
    reports: 'Reports',
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
        <h1 className="navbar-title">
          {pageNames[currentPage] || 'Dashboard'}
        </h1>
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
            <p className="navbar-user-name">HELLO, WN</p>
            <p className="navbar-user-role">Admin</p>
          </div>
          <div className="navbar-user-avatar">
            WN
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
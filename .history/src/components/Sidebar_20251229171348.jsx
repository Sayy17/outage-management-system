import React from 'react';
import { LayoutDashboard, BarChart3, Package, FileText, LogOut } from 'lucide-react';
import './Sidebar.css';
import logo from '../assets/images/logo.png';

function Sidebar({ sidebarOpen, currentPage, setCurrentPage, onLogout }) {
  const menuItems = [
    { id: 'overview', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'resources', label: 'Resources', icon: Package },
    { id: 'reports', label: 'Reports', icon: FileText },
  ];

  return (
    <div className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
      {/* logo */} 
      <div className="sidebar-logo">
        <div 
          className="sidebar-logo-icon"
          style={{ backgroundImage: `url(${logo})` }}
        ></div>
        {sidebarOpen && (
          <div className="sidebar-logo-text">
            <p className="sidebar-logo-name">Sonalgaz</p>
            <p className="sidebar-logo-subtitle">NETWORK OPERATIONS CENTER</p>
          </div>
        )}
      </div>

      {/* menu Items */}
      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`sidebar-menu-item ${currentPage === item.id ? 'active' : ''}`}
              title={!sidebarOpen ? item.label : ''}
            >
              <Icon size={20} />
              {sidebarOpen && <span className="sidebar-menu-label">{item.label}</span>}
            </button>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="sidebar-footer">
        <button 
          className="sidebar-logout-btn" 
          onClick={onLogout}
          title="Logout"
        >
          <LogOut size={20} />
          {sidebarOpen && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
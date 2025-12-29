import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import './Layout.css';

function Layout({ currentPage, setCurrentPage, children, user }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // User will be redirected to login page automatically
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="layout-container">
      <Sidebar 
        sidebarOpen={sidebarOpen} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        onLogout={handleLogout}
      />
      
      <div className="layout-main">
        <Navbar 
          sidebarOpen={sidebarOpen} 
          setSidebarOpen={setSidebarOpen} 
          currentPage={currentPage}
          user={user}
        />
        
        <div className="layout-content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
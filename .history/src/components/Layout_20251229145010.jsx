import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './Layout.css';

function Layout({ currentPage, setCurrentPage, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="layout-container">
      <Sidebar 
        sidebarOpen={sidebarOpen} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
      />
      
      <div className="layout-main">
        <Navbar 
          sidebarOpen={sidebarOpen} 
          setSidebarOpen={setSidebarOpen} 
          currentPage={currentPage} 
        />
        
        <div className="layout-content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
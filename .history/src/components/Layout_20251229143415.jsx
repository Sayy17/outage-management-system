import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Layout({ currentPage, setCurrentPage, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar 
        sidebarOpen={sidebarOpen} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
      />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <Navbar 
          sidebarOpen={sidebarOpen} 
          setSidebarOpen={setSidebarOpen} 
          currentPage={currentPage} 
        />
        
        {/* Page Content */}
        <div className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
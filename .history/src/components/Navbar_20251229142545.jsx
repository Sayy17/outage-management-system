import React from 'react';
import { Menu, X, Bell } from 'lucide-react';

function Navbar({ sidebarOpen, setSidebarOpen, currentPage }) {
  const pageNames = {
    overview: 'Overview',
    incidents: 'Active Incidents',
    technicians: 'Field Technicians',
    settings: 'Settings',
  };

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <h1 className="text-2xl font-bold text-gray-800">
          {pageNames[currentPage] || 'Dashboard'}
        </h1>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-sm font-medium text-gray-700">LIVE</span>
        </div>

        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell size={20} className="text-gray-600" />
        </button>

        <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
          <div className="text-right">
            <p className="text-sm font-medium text-gray-800">HELLO, WN</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
          <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
            WN
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
import React from 'react';
import { LayoutDashboard, BarChart3, Package, FileText, LogOut } from 'lucide-react';

function Sidebar({ sidebarOpen, currentPage, setCurrentPage }) {
  const menuItems = [
    { id: 'overview', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'resources', label: 'Resources', icon: Package },
    { id: 'reports', label: 'Reports', icon: FileText },
  ];

  return (
    <div
      className={`${
        sidebarOpen ? 'w-64' : 'w-20'
      } bg-white text-gray-800 transition-all duration-300 flex flex-col border-r border-gray-200`}
    >
      {/* Logo */}
      <div className="p-4 flex items-center gap-3 border-b border-gray-200">
        <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center font-bold text-white">
          S
        </div>
        {sidebarOpen && (
          <div>
            <p className="font-bold text-sm">Sonalgaz</p>
            <p className="text-xs text-gray-500">NETWORK OPERATIONS CENTER</p>
          </div>
        )}
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                currentPage === item.id
                  ? 'bg-blue-900 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Icon size={20} />
              {sidebarOpen && <span className="text-sm">{item.label}</span>}
            </button>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-200">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:text-gray-900 transition-colors">
          <LogOut size={20} />
          {sidebarOpen && <span className="text-sm">Logout</span>}
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
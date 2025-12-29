import React from 'react';

function Overview() {
  return (
    <div className="space-y-6">
      {/* Header with buttons */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Overview</h1>
      </div>

      {/* Filter buttons */}
      <div className="flex gap-3">
        <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
          All Regions
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
          All Services
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
          Real Time
        </button>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3">
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
          Auto-refresh
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
          Export
        </button>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white border-2 border-orange-400 rounded-lg p-6">
          <h3 className="text-gray-600 text-sm font-medium mb-2">Active Outages</h3>
          <p className="text-4xl font-bold text-gray-800">50</p>
        </div>
        <div className="bg-white border-2 border-red-400 rounded-lg p-6">
          <h3 className="text-gray-600 text-sm font-medium mb-2">Affected Customers</h3>
          <p className="text-4xl font-bold text-gray-800">10000</p>
        </div>
        <div className="bg-white border-2 border-green-400 rounded-lg p-6">
          <h3 className="text-gray-600 text-sm font-medium mb-2">Avg Restoration Time</h3>
          <p className="text-4xl font-bold text-gray-800">7.13</p>
        </div>
        <div className="bg-white border-2 border-green-400 rounded-lg p-6">
          <h3 className="text-gray-600 text-sm font-medium mb-2">Technician Utilization</h3>
          <p className="text-4xl font-bold text-gray-800">70</p>
        </div>
      </div>

      {/* Map placeholder */}
      <div className="bg-white rounded-lg p-6 h-64 flex items-center justify-center border border-gray-200">
        <p className="text-gray-500">Map will be displayed here</p>
      </div>

      {/* Active Incidents */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-800">Active Incidents</h3>
          <span className="text-sm text-gray-600">2 active</span>
        </div>
        <div className="border border-gray-300 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-gray-800">TICKET #1717</span>
            <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">High</span>
          </div>
          <p className="text-sm text-gray-600 mb-3">No power in some building, nanananana/NANANA...</p>
          <div className="text-xs text-gray-500 space-y-1 mb-4">
            <p>Alger centre</p>
            <p>1623 customers affected</p>
            <p>ETA: 12 hrs</p>
            <p>Assigned to /</p>
          </div>
          <div className="flex gap-3">
            <button className="flex-1 bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800">
              Assign
            </button>
            <button className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400">
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* Field Technicians */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-800">Field Technicians</h3>
          <span className="text-sm text-gray-600">1 available</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-2 text-gray-600 font-medium">Technician</th>
                <th className="text-left py-2 text-gray-600 font-medium">Status</th>
                <th className="text-left py-2 text-gray-600 font-medium">Current Assignment</th>
                <th className="text-left py-2 text-gray-600 font-medium">Location</th>
                <th className="text-left py-2 text-gray-600 font-medium">Workload</th>
                <th className="text-left py-2 text-gray-600 font-medium">Skills</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="py-3">HARDY STY</td>
                <td><span className="text-xs border border-gray-400 px-2 py-1 rounded">ON SITE</span></td>
                <td>#TICK-1717</td>
                <td>Alger centre</td>
                <td><div className="w-16 h-2 bg-orange-400 rounded"></div></td>
                <td>85%</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-3">Zayn MA</td>
                <td><span className="text-xs border border-gray-400 px-2 py-1 rounded">ASSIGNED</span></td>
                <td>#TICK-1717</td>
                <td>Alger centre</td>
                <td><div className="w-16 h-2 bg-green-400 rounded"></div></td>
                <td>50%</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-3">LIAM PAY</td>
                <td><span className="text-xs border border-gray-400 px-2 py-1 rounded">EN ROUTE</span></td>
                <td>#TICK-1717</td>
                <td>Alger centre</td>
                <td><div className="w-16 h-2 bg-orange-400 rounded"></div></td>
                <td>3%</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-3">LOUIS TOM</td>
                <td><span className="text-xs border border-gray-400 px-2 py-1 rounded">AVAILABLE</span></td>
                <td>No assignment</td>
                <td>Alger centre</td>
                <td><div className="w-16 h-2 bg-orange-400 rounded"></div></td>
                <td>—</td>
              </tr>
              <tr>
                <td className="py-3">NIALL HOR</td>
                <td><span className="text-xs border border-gray-400 px-2 py-1 rounded">ON SITE</span></td>
                <td>#TICK-1717</td>
                <td>Alger</td>
                <td><div className="w-16 h-2 bg-orange-400 rounded"></div></td>
                <td>5%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Overview;
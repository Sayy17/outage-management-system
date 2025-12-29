import React from 'react';
import { Download } from 'lucide-react';
import './Overview.css';

function Overview() {
  return (
    <div className="overview-container">
      {/* Header */}
      <div className="overview-header">
        <h1 className="overview-title">Overview</h1>
      </div>

      {/* Filter buttons */}
      <div className="button-group">
        <button className="btn">All Regions</button>
        <button className="btn">All Services</button>
        <button className="btn">Real Time</button>
      </div>

      {/* Action buttons */}
      <div className="button-group">
        <button className="btn btn-secondary">
          
          Auto-refresh</button>
        <button className="btn btn-secondary">
          Export</button>
      </div>

      {/* Metrics Cards */}
      <div className="metrics-grid">
        <div className="metric-card orange">
          <p className="metric-label">Active Outages</p>
          <p className="metric-value">50</p>
        </div>
        <div className="metric-card red">
          <p className="metric-label">Affected Customers</p>
          <p className="metric-value">10000</p>
        </div>
        <div className="metric-card green">
          <p className="metric-label">Avg Restoration Time</p>
          <p className="metric-value">7.13</p>
        </div>
        <div className="metric-card green">
          <p className="metric-label">Technician Utilization</p>
          <p className="metric-value">70</p>
        </div>
      </div>

      {/* Map placeholder */}
      <div className="map-placeholder">
        Map will be displayed here
      </div>

      {/* Active Incidents */}
      <div className="section-card">
        <div className="section-header">
          <h3 className="section-title">Active Incidents</h3>
          <span className="section-badge">2 active</span>
        </div>
        <div className="incident-card">
          <div className="incident-header">
            <span className="incident-id">TICKET #1717</span>
            <span className="incident-severity">High</span>
          </div>
          <p className="incident-description">No power in some building, nanananana/NANANA...</p>
          <div className="incident-details">
            <p>Alger centre</p>
            <p>1623 customers affected</p>
            <p>ETA: 12 hrs</p>
            <p>Assigned to /</p>
          </div>
          <div className="incident-actions">
            <button className="incident-assign">Assign</button>
            <button className="incident-delete">Delete</button>
          </div>
        </div>
      </div>

      {/* Field Technicians */}
      <div className="section-card">
        <div className="section-header">
          <h3 className="section-title">Field Technicians</h3>
          <span className="section-badge">1 available</span>
        </div>
        <table className="technicians-table">
          <thead>
            <tr>
              <th>Technician</th>
              <th>Status</th>
              <th>Current Assignment</th>
              <th>Location</th>
              <th>Workload</th>
              <th>Skills</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>HARDY STY</td>
              <td><span className="technician-status">ON SITE</span></td>
              <td>#TICK-1717</td>
              <td>Alger centre</td>
              <td>
                <div className="workload-bar">
                  <div className="workload-fill" style={{ width: '85%' }}></div>
                </div>
              </td>
              <td>85%</td>
            </tr>
            <tr>
              <td>Zayn MA</td>
              <td><span className="technician-status">ASSIGNED</span></td>
              <td>#TICK-1717</td>
              <td>Alger centre</td>
              <td>
                <div className="workload-bar">
                  <div className="workload-fill" style={{ width: '50%', backgroundColor: '#10b981' }}></div>
                </div>
              </td>
              <td>50%</td>
            </tr>
            <tr>
              <td>LIAM PAY</td>
              <td><span className="technician-status">EN ROUTE</span></td>
              <td>#TICK-1717</td>
              <td>Alger centre</td>
              <td>
                <div className="workload-bar">
                  <div className="workload-fill" style={{ width: '3%' }}></div>
                </div>
              </td>
              <td>3%</td>
            </tr>
            <tr>
              <td>LOUIS TOM</td>
              <td><span className="technician-status">AVAILABLE</span></td>
              <td>No assignment</td>
              <td>Alger centre</td>
              <td>
                <div className="workload-bar">
                  <div className="workload-fill" style={{ width: '0%' }}></div>
                </div>
              </td>
              <td>—</td>
            </tr>
            <tr>
              <td>NIALL HOR</td>
              <td><span className="technician-status">ON SITE</span></td>
              <td>#TICK-1717</td>
              <td>Alger</td>
              <td>
                <div className="workload-bar">
                  <div className="workload-fill" style={{ width: '5%' }}></div>
                </div>
              </td>
              <td>5%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Overview;
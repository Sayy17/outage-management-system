import React, { useState } from 'react';
import Layout from './components/Layout';
import Overview from './pages/Overview';
import Analytics from './pages/Analytics';
import Resources from './pages/Resources';
import Reports from './pages/Reports';
import Login from './pages/Login';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('overview');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'overview':
        return <Overview />;
      case 'analytics':
        return <Analytics />;
      case 'resources':
        return <Resources />;
      case 'reports':
        return <Reports />;
      default:
        return <Overview />;
    }
  };

  // Show login page if not logged in
  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  // Show dashboard if logged in
  return (
    <Layout 
      currentPage={currentPage} 
      setCurrentPage={setCurrentPage}
      onLogout={handleLogout}
    >
      {renderPage()}
    </Layout>
  );
}

export default App;
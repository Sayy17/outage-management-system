import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Overview from './pages/Overview';
import Analytics from './pages/Analytics';
import Resources from './pages/Resources';
import Reports from './pages/Reports';
import Login from './pages/Login';
import Settings from './pages/Settings'; 
import { auth, onAuthStateChanged } from './firebase';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('overview');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    // Logout will be handled by the onAuthStateChanged listener
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
      case 'settings':
      default:
        return <Overview />;
    }
  };

  // Show loading spinner while checking auth state
  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(to bottom, #f9982f 0%, #ffb357 35%, #fff4e8 65%, #ffffff 100%)'
      }}>
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />        
        {/* Protected Routes */}
        <Route path="/" element={
          user ? (
            <Layout 
              currentPage={currentPage} 
              setCurrentPage={setCurrentPage}
              onLogout={handleLogout}
              user={user}
            >
              {renderPage()}
            </Layout>
          ) : (
            <Navigate to="/login" />
          )
        } />
        
        {/* Catch all route */}
        <Route path="*" element={<Navigate to={user ? "/" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;
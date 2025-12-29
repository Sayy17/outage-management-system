import React, { useState } from 'react';
import Layout from './components/Layout';
import Overview from './pages/Overview';
import Analytics from './pages/Analytics';
import Resources from './pages/Resources';
import Reports from './pages/Reports';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('overview');

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

  return (
    <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
}

export default App;
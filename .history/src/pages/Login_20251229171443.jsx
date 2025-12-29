import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { loginWithEmailPassword } from '../firebase';
import './Login.css';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email || !password) {
      setError('Please enter both email/ID and password');
      return;
    }

    setLoading(true);
    setError('');

    const result = await loginWithEmailPassword(email, password);
    
    if (result.success) {
      console.log('Login successful:', result.user);
      // User will be redirected automatically by onAuthStateChanged in App.js
    } else {
      setError(result.error || 'Login failed. Please check your credentials.');
    }
    
    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        {/* logo */}
        <div className="login-logo">
          <img src={logo} alt="SONASTORE Logo" className="login-logo-icon" />
          <h1 className="login-logo-text">SONASTORE</h1>
        </div>

        {/* login card */}
        <div className="login-card">
          <div className="login-header">
            <h2 className="login-title">Welcome Back!</h2>
            <p className="login-subtitle">Please enter your details.</p>
          </div>

          {error && (
            <div style={{
              backgroundColor: '#fee',
              color: '#c33',
              padding: '10px',
              borderRadius: '8px',
              marginBottom: '20px',
              fontSize: '14px',
              textAlign: 'center'
            }}>
              {error}
            </div>
          )}

          <div className="login-form">
            {/* email/ID input */}
            <div className="form-group">
              <label className="form-label">E-mail/ ID</label>
              <div className="input-wrapper">
                <Mail size={18} className="input-icon" />
                <input
                  type="text"
                  className="form-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter your email"
                  disabled={loading}
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="input-wrapper">
                <Lock size={18} className="input-icon" />
                <input
                  type="password"
                  className="form-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter your password"
                  disabled={loading}
                />
              </div>
            </div>

            {/* Remember Me */}
            <div className="remember-me">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                disabled={loading}
              />
              <label htmlFor="remember">Remember me</label>
            </div>

            {/* Sign In Button */}
            <button 
              className="login-button"
              onClick={handleSubmit}
              disabled={loading}
              style={{
                opacity: loading ? 0.7 : 1,
                cursor: loading ? 'not-allowed' : 'pointer'
              }}
            >
              {loading ? 'Logging in...' : 'Log In'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
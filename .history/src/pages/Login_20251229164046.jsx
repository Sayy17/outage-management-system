import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import './Login.css';
import logo from '../assets/images/logo.png';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = () => {
    // Simple validation
    if (email && password) {
      console.log('Login attempt:', { email, password, rememberMe });
      onLogin(); // Call the function to log in
    } else {
      alert('Please enter both email/ID and password');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        {/* Logo */}
        {/* Logo */}
     <div className="login-logo">
      <img 
    src={logo} 
    alt="SONASTORE Logo" 
    className="login-logo-icon"
  />
  <h1 className="login-logo-text">SONASTORE</h1>
</div>


        {/* Login Card */}
        <div className="login-card">
          <div className="login-header">
            <h2 className="login-title">Welcome Back!</h2>
            <p className="login-subtitle">Please enter your details.</p>
          </div>

          <div className="login-form">
            {/* Email/ID Input */}
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
                  placeholder=""
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
                  placeholder=""
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
              />
              <label htmlFor="remember">Remember me</label>
            </div>

            {/* Sign In Button */}
            <button 
              className="login-button"
              onClick={handleSubmit}
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
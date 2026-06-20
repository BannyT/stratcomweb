import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <span className="login-brand">StratCom</span>
          <h2>Welcome Back</h2>
          <p>Sign in to your account to continue</p>
        </div>

        <form className="login-form">
          <div className="login-form-group">
            <label htmlFor="login-email">Email Address</label>
            <input 
              type="email" 
              id="login-email" 
              placeholder="you@example.com" 
              required
            />
          </div>

          <div className="login-form-group">
            <label htmlFor="login-password">Password</label>
            <input 
              type="password" 
              id="login-password" 
              placeholder="Enter your password" 
              required
            />
          </div>

          <div className="login-form-options">
            <label className="login-remember">
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="login-forgot">Forgot password?</a>
          </div>

          <button type="submit" className="login-btn">Sign In</button>
        </form>

        <p className="login-switch">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
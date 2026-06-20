import React from 'react';
import './Signup.css';

const Signup = () => {
  return (
    <div className="signup-page">
      <div className="signup-card">
        <div className="signup-header">
          <span className="signup-brand">StratCom</span>
          <h2>Create Account</h2>
          <p>Join us and start your tech journey today</p>
        </div>

        <form className="signup-form">
          <div className="signup-form-group">
            <label htmlFor="signup-fullname">Full Name</label>
            <input 
              type="text" 
              id="signup-fullname" 
              placeholder="John Doe" 
              required
            />
          </div>

          <div className="signup-form-group">
            <label htmlFor="signup-email">Email Address</label>
            <input 
              type="email" 
              id="signup-email" 
              placeholder="you@example.com" 
              required
            />
          </div>

          <div className="signup-form-group">
            <label htmlFor="signup-password">Password</label>
            <input 
              type="password" 
              id="signup-password" 
              placeholder="Create a strong password" 
              required
            />
          </div>

          <div className="signup-form-group">
            <label htmlFor="signup-confirm">Confirm Password</label>
            <input 
              type="password" 
              id="signup-confirm" 
              placeholder="Confirm your password" 
              required
            />
          </div>

          <div className="signup-form-options">
            <label className="signup-terms">
              <input type="checkbox" required /> I agree to the 
              <a href="#"> Terms of Service</a> and <a href="#">Privacy Policy</a>
            </label>
          </div>

          <button type="submit" className="signup-btn">Create Account</button>
        </form>

        <p className="signup-switch">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
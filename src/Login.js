import React,{useState} from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import {auth,signInWithEmailAndPassword} from './firebase'


const Login = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState('')
  const [loading,setLoading]=useState(false)
  const navigate =useNavigate()
    
  //  login function

      const loginUser =()=>{
          //  console.log('login me')
      }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <span className="login-brand"><a href='/'>StratCom</a></span>
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
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
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
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          <div className="login-form-options">
            <label className="login-remember">
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="login-forgot">Forgot password?</a>
          </div>

          <button onClick={loginUser} type="submit" className="login-btn">Sign In</button>
        </form>

        <p className="login-switch">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';
import logo from '../../assets/Logo/logo.png';
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/Dashboard'); 
    } catch {
      setError('Invalid login credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-image">
          <img src="src\assets\images\LoginImg\LogIn-img.png" alt="background-login" />
        </div>
        
        <form onSubmit={handleLogin} className="login-form">
          <div className="login-logo">
          <img src={logo} alt="Pawtner Logo" />
          </div>
          <h2>Log In</h2>
          {error && <p className="error">{error}</p>}
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="login-button-2" type="submit">Log In</button>
          <p>Don't have an account? <a href="/signup">Sign Up</a></p>
        </form>
      </div>
    </div>
  );
};

export default Login;

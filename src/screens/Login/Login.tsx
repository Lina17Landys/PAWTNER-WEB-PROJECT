import React, { useState } from 'react';
import './Login.css';
import logo from '../../img/logo.png';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/DiseaseForum'); 
    } catch (error) {
      setError('Invalid login credentials');
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        
        <div className="login-image">
          <img src="src\assets\images\LogIn-img.png" alt="background-login" />
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
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              id="password"
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

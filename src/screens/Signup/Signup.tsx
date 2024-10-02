import React, { useState } from 'react';
import './Signup.css';
import logo from '../../img/logo.png';
import catImage from '../../img/Cat-Signup.png';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebaseConfig'; // Asegúrate de que la ruta sea correcta

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validar que la contraseña tenga al menos 6 caracteres
    if (password.length < 6) {
      setError('The password must be at least 6 characters long');
      return;
    }

    // Validar que ambas contraseñas coincidan
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Validar si los términos y condiciones han sido aceptados
    if (!termsAccepted) {
      setError('You must accept the terms and conditions');
      return;
    }

    try {
      // Crear usuario con Firebase
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Account created successfully!');
    } catch (error: any) {
      // Manejo de errores con Firebase
      if (error.code === 'auth/email-already-in-use') {
        setError('This email is already in use');
      } else if (error.code === 'auth/invalid-email') {
        setError('Invalid email address');
      } else if (error.code === 'auth/weak-password') {
        setError('The password is too weak');
      } else {
        setError('Failed to create account');
      }
      console.error(error);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <div className="signup-form">
          <div className="signup-logo">
            <img src={logo} alt="Pawtner Logo" />
          </div>
          <h1>Sign Up</h1>
          <p>Join us and help more animals</p>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSignup}>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <div className="terms">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
              />
              <label>Agree to Terms and Conditions</label>
            </div>
            <button type="submit">Create Account</button>
          </form>
          <button className="google-btn">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Google_2015_logo.svg" alt="Google Logo" />
            Sign up with Google
          </button>
          <p>Already have an account? <a href="/login">Log In</a></p>
        </div>

        <div className="signup-cat">
          <img src={catImage} alt="Cat" />
        </div>
      </div>
    </div>
  );
};

export default Signup;

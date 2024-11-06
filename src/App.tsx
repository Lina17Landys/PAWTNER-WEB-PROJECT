//import { useState } from 'react'
//import LandingPage from './screens/landing/landing'
import DashBoard from './screens/dashboard/dashboard'
import './App.css'
import DiseaseForum from './screens/DiseaseForum/DiseaseForum'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './screens/landing/landing';   
import Login from './screens/Login/Login';
import Signup from './screens/Signup/Signup';
import Quiz from './screens/Quiz/Quiz';
import { QuizProvider } from './context/QuizContext/QuizContext';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Dashboard" element={<DashBoard />} />
        <Route path="/DiseaseForum" element={<DiseaseForum />} />
        <Route
          path="/quiz/*"
          element={
            <QuizProvider>
              <Quiz />
            </QuizProvider>
          }
        />
        
      </Routes>
    </Router>
  );
}

export default App;

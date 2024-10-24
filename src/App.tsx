//import { useState } from 'react'
//import LandingPage from './screens/landing/landing'
import DashBoard from './screens/dashboard/dashboard'
import './App.css'
import DiseaseForum from './screens/DiseaseForum/DiseaseForum'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './screens/landing/landing';   
import Login from './screens/Login/Login';
import Signup from './screens/Signup/Signup';
import Shop from './screens/storePage/storePage';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Dashboard" element={<DashBoard />} />
        <Route path="/DiseaseForum" element={<DiseaseForum />} />
        <Route path="/Shop" element={<Shop/>} />

      </Routes>
    </Router>
  );
}

export default App;

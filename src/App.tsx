import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './screens/landing/landing';   
import Login from './screens/Login/Login';
import Signup from './screens/Signup/Signup';

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Landing />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<div>Dashboard</div>} /> 
      </Routes>
    </Router>
  );
}

export default App;

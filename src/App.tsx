import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './screens/landing/landing';   // Importa el componente Landing
import Login from './screens/Login/Login';
import Signup from './screens/Signup/Signup';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal que mostrará la página de aterrizaje */}
        <Route path="/" element={<Landing />} />
        
        {/* Otras rutas */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<div>Dashboard</div>} /> {/* Página protegida */}
      </Routes>
    </Router>
  );
}

export default App;

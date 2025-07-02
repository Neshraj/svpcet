import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import StudentDashboard from './components/StudentDashboard';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/studentdashboard" element={<StudentDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
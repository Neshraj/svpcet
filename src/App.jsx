import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import StudentDashboard from './components/StudentDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/studentdashboard" element={<StudentDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
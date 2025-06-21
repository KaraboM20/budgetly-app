import './App.css';
import { Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Auth/Login';
import sign

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signUp" exact element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

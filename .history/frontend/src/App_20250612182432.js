import './App.css';
import { Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" exact element={<Login}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

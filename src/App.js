import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
import HeaderArea from './HeaderArea/HeaderArea';

function App() {
  return (
    <Router>
      <div>
        <HeaderArea />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<div>Welcome to the Homepage</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

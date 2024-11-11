import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroPage from './components/HeroPage';
import LoginPage from './components/LogInPage'; // Ensure the file name matches
import OtpVerification from './components/OtpVerification';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import AboutUs from './components/AboutUs';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/otp" element={<OtpVerification />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

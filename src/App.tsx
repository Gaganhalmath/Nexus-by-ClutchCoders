import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroPage from './components/HeroPage';
import LoginPage from './components/LogInPage'; // Ensure the file name matches
import OtpVerification from './components/OtpVerification';
import ProfileCreation from './components/profile/ProfileCreation';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import AboutUs from './components/AboutUs';
import MentorshipSection from './components/MentorshipSection';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/otp" element={<OtpVerification />} />
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          <Route path="/profile-creation" element={<ProfileCreation onComplete={function (): void {
            throw new Error('Function not implemented.');
          } } onSkip={function (): void {
            throw new Error('Function not implemented.');
          } } />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/mentorship" element={<MentorshipSection />} />

          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

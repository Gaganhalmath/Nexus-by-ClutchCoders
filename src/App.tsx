import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HeroPage from './components/HeroPage';
import LoginPage from './components/LogInPage';
import OtpVerification from './components/OtpVerification';
import ProfileCreation from './components/profile/ProfileCreation';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import AboutUs from './components/AboutUs';
import MentorshipSection from './components/MentorshipSection';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    // Update the authentication state after successful login
    setIsAuthenticated(true);
  };

  const PrivateRoute: React.FC<{ element: JSX.Element }> = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  const handleComplete = () => {
    console.log('Profile completed');
  };

  const handleSkip = () => {
    console.log('Profile skipped');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HeroPage />} />
        <Route path="/login" element={<LoginPage onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/otp" element={<OtpVerification />} />
        <Route path="/about" element={<AboutUs />} />

        {/* Profile Creation */}
        <Route
          path="/profile-creation"
          element={<ProfileCreation onComplete={handleComplete} onSkip={handleSkip} />}
        />

        {/* Private Routes */}
        <Route path="/homepage" element={<PrivateRoute element={<HomePage />} />} />
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
        <Route path="/mentorship" element={<PrivateRoute element={<MentorshipSection />} />} />
      </Routes>
    </div>
  );
};

export default App;

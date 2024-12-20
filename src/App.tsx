<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
=======
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
>>>>>>> 46b787e15e6efb9b5bcb3543e6b4be5c6e883b9a
import HeroPage from './components/HeroPage';
import LoginPage from './components/LogInPage';
import OtpVerification from './components/OtpVerification';
import ProfileCreation from './components/profile/ProfileCreation';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import AboutUs from './components/AboutUs';
import MentorshipSection from './components/MentorshipSection';
import Chatbot from './components/Chatbot'; // Import the chatbot component
import FindFriends from './components/FindFriends';
import UserProfile from './components/dashboard/UserProfile';
import ProfileModal from './components/profile/ProfileModal';

const App: React.FC = () => {
<<<<<<< HEAD
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Shared Layout with Chatbot */}
        <Chatbot />
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/otp" element={<OtpVerification />} />
          <Route
            path="/profile-creation"
            element={
              <ProfileCreation
                onComplete={() => console.log('Profile creation complete')}
                onSkip={() => console.log('Profile creation skipped')}
              />
            }
          />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profilemodal" element={<ProfileModal />} />
          <Route path="/mentorship" element={<MentorshipSection />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/find-friends" element={<FindFriends />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
=======
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
>>>>>>> 46b787e15e6efb9b5bcb3543e6b4be5c6e883b9a
  );
};

export default App;

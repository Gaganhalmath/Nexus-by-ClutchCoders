import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
  );
};

export default App;

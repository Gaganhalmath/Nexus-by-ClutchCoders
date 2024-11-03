
import './App.css'
import React, { useState } from 'react';
import LoginPage from './components/LogInPage';
import OtpVerification from './components/OtpVerification';
import RegisterPage from './components/RegisterPage';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'login' | 'otp' | 'register'| 'dashboard'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (email: string, password: string) => {
    if (email && password) { 
      console.log('Logging in with', email, password); 
      setEmail(email);
      setPassword(password); 
      setCurrentView('otp'); 
    } else { 
      console.log('Login failed: Email and password required');
     }
     };

  const handleRegister = (name: string, email: string, password: string) => {
    console.log('Registering', name, email);
    setEmail(email);
    setPassword(password);
    setCurrentView('otp');
  };

  const handleForgotPassword = () => {
    console.log('Forgot password');
  };

  const handleOtpVerify = (otp: string) => {
    console.log('Verifying OTP', otp);
    // Now you can use email and password to log in or proceed further
    setCurrentView('dashboard');
  };

  const handleBackToLogin = () => {
    setCurrentView('login');
  };

  const handleShowRegister = () => {
    setCurrentView('register');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {currentView === 'login' && (
        <LoginPage
          onLogin={handleLogin}
          onRegister={handleShowRegister}
          onForgotPassword={handleForgotPassword}
        />
      )}
      {currentView === 'otp' && (
        <OtpVerification
          email={email}
          onVerify={handleOtpVerify}
          onBackToLogin={handleBackToLogin}
        />
      )}
      {currentView === 'register' && (
        <RegisterPage
          onRegister={(name, email, password) => {
            handleRegister(name, email, password);
            setPassword(password); // Store the password
          }}
          onBackToLogin={handleBackToLogin}
        />
      )}
      {currentView ==='dashboard' && (
        <Dashboard/>
      )}
    </div>
  );
};

export default App;

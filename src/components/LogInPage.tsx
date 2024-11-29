import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, Lock, Mail, MessageSquare } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface LoginPageProps {
  onLoginSuccess: () => void; // Prop to notify the parent component of successful login
}

const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleError = (message: string) => {
    toast.error(message, {
      position: 'top-right',
      autoClose: 3000,
    });
  };

  const handleSuccess = (message: string) => {
    toast.success(message, {
      position: 'top-right',
      autoClose: 3000,
    });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      return handleError('Email and password are required');
    }
    try {
      const url = `http://localhost:5000/auth/login`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      const { success, message, jwtToken, name, error } = result;

      if (success) {
        handleSuccess(message);
        localStorage.setItem('token', jwtToken);
        localStorage.setItem('loggedInUser', name);
        
        // Call onLoginSuccess to notify parent about successful login
        onLoginSuccess();

        setTimeout(() => {
          navigate('/homepage');
        }, 1000);
      } else if (error) {
        const details = error?.details[0]?.message || 'An error occurred';
        handleError(details);
      } else {
        handleError(message);
      }
    } catch (err) {
      handleError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#36393f]">
      <div className="w-full max-w-md space-y-8 bg-[#2f3136] p-8 rounded-lg shadow-2xl">
        <div className="text-center">
          <MessageSquare className="mx-auto h-12 w-12 text-[#5865f2]" />
          <h2 className="mt-6 text-3xl font-bold text-white">Welcome back!</h2>
          <p className="mt-2 text-gray-400">We're excited to see you again!</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                EMAIL
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  required
                  className="block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-md bg-[#202225] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5865f2] focus:border-transparent"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                PASSWORD
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  required
                  className="block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-md bg-[#202225] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5865f2] focus:border-transparent"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#5865f2] hover:bg-[#4752c4] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5865f2]"
          >
            <LogIn className="h-5 w-5 mr-2" />
            Login
          </button>

          <p className="text-center text-sm text-gray-400">
            Need an account?{' '}
            <button
              type="button"
              onClick={() => navigate('/register')}
              className="text-[#5865f2] hover:underline"
            >
              Register
            </button>
          </p>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default LoginPage;

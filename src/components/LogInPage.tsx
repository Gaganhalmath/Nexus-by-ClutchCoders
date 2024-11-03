import React, { useState } from 'react';
import { LogIn, Lock, Mail, MessageSquare } from 'lucide-react';

interface LoginPageProps {
  onLogin: (email: string, password: string) => void;
  onRegister: () => void;
  onForgotPassword: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onRegister, onForgotPassword }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#36393f]">
      <div className="w-full max-w-md space-y-8 bg-[#2f3136] p-8 rounded-lg shadow-2xl">
        <div className="text-center">
          <MessageSquare className="mx-auto h-12 w-12 text-[#5865f2]" />
          <h2 className="mt-6 text-3xl font-bold text-white">Welcome back!</h2>
          <p className="mt-2 text-gray-400">We're excited to see you again!</p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
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

          <div>
            <button
              type="button"
              onClick={onForgotPassword}
              className="text-sm text-[#5865f2] hover:underline"
            >
              Forgot your password?
            </button>
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
              onClick={onRegister}
              className="text-[#5865f2] hover:underline"
            >
              Register
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

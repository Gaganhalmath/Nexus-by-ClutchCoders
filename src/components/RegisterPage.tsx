import React, { useState } from 'react';
import { ArrowLeft, User, Mail, Lock, MessageSquare } from 'lucide-react';

interface RegisterPageProps {
  onRegister: (name: string, email: string, password: string) => void;
  onBackToLogin: () => void;
}

const RegisterPage: React.FC<RegisterPageProps> = ({ onRegister, onBackToLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    onRegister(name, email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#36393f] p-4">
      <div className="w-full max-w-md space-y-8 bg-[#2f3136] p-8 rounded-lg shadow-2xl">
        <div className="text-center">
          <MessageSquare className="mx-auto h-12 w-12 text-[#5865f2]" />
          <h2 className="mt-6 text-3xl font-bold text-white">Create an account</h2>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                NAME
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  required
                  className="block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-md bg-[#202225] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5865f2] focus:border-transparent"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

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
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                CONFIRM PASSWORD
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  required
                  className="block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-md bg-[#202225] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5865f2] focus:border-transparent"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#5865f2] hover:bg-[#4752c4] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5865f2]"
          >
            Continue
          </button>

          <button
            type="button"
            onClick={onBackToLogin}
            className="w-full flex items-center justify-center text-sm text-gray-400 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OtpVerification: React.FC = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/homepage');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#36393f]">
      <div className="w-full max-w-md space-y-8 bg-[#2f3136] p-8 rounded-lg shadow-2xl">
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                OTP
              </label>
              <input
                type="text"
                required
                className="block w-full pl-3 pr-3 py-2 border border-gray-600 rounded-md bg-[#202225] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5865f2] focus:border-transparent"
                placeholder="Enter your OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="text-sm text-[#5865f2] hover:underline"
            >
              Back
            </button>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#5865f2] hover:bg-[#4752c4] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5865f2]"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default OtpVerification;

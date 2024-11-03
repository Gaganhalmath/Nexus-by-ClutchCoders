import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, MessageSquare } from 'lucide-react';

interface OtpVerificationProps {
  email: string;
  onVerify: (otp: string) => void;
  onBackToLogin: () => void;
}

function OtpVerification({ email, onVerify, onBackToLogin }: OtpVerificationProps) {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      if (value && index < 3) {
        inputs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    if (otp.every(digit => digit !== '')) {
      onVerify(otp.join(''));
    }
  }, [otp, onVerify]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#36393f] p-4">
      <div className="w-full max-w-md space-y-8 bg-[#2f3136] p-8 rounded-lg shadow-2xl">
        <div className="text-center">
          <MessageSquare className="mx-auto h-12 w-12 text-[#5865f2]" />
          <h2 className="mt-6 text-3xl font-bold text-white">Verify Your Email</h2>
          <p className="mt-2 text-gray-400">We sent a code to {email}</p>
        </div>
        
        <div className="mt-8 space-y-6">
          <div className="flex justify-center space-x-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={el => inputs.current[index] = el}
                type="text"
                maxLength={1}
                className="w-14 h-14 text-center text-2xl font-bold border border-gray-600 rounded-md bg-[#202225] text-white focus:outline-none focus:ring-2 focus:ring-[#5865f2] focus:border-transparent"
                value={digit}
                onChange={e => handleChange(index, e.target.value)}
                onKeyDown={e => handleKeyDown(index, e)}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={onBackToLogin}
            className="w-full flex items-center justify-center text-sm text-gray-400 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default OtpVerification;

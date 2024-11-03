import React from 'react';
import { X } from 'lucide-react';
import AchievementSection from './sections/AchievementSection';
import CoinsSection from './sections/CoinsSection';
import MentorshipSection from './sections/MentorshipSection';
import RedeemSection from './sections/RedeemSection';

interface ProfileModalProps {
  onClose: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-[#36393f] w-full max-w-2xl rounded-lg shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-[#202225]">
          <h2 className="text-xl font-bold text-white">User Profile</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AchievementSection />
            <CoinsSection />
            <MentorshipSection />
            <RedeemSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;

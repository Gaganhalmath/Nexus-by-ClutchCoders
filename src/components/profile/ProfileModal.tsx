import React from 'react';
import { X } from 'lucide-react';
import AchievementSection from './sections/AchievementSection';
import CoinsSection from './sections/CoinsSection';
import MentorshipSection from './sections/MentorshipSection';
import RedeemSection from './sections/RedeemSection';

interface ProfileModalProps {
  onClose: () => void;
  profileData: {
    avatar: string | null;
    username: string;
    tag: string;
    skills: string[];
    achievements: string[];
    coins: number;
  };
}

const ProfileModal: React.FC<ProfileModalProps> = ({ onClose, profileData }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-[#36393f] w-full max-w-6xl rounded-lg shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-[#202225]">
          <h2 className="text-xl font-bold text-white">User Profile</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Profile and Sections Layout */}
        <div className="p-6 flex flex-col md:flex-row space-y-6 md:space-y-0">
          {/* Left Section: Profile Information */}
          <div className="w-full md:w-1/3 flex flex-col items-center space-y-4">
            {/* Profile Picture */}
            <div className="relative w-32 h-32 mb-4">
              <img
                src={profileData.avatar || 'https://via.placeholder.com/150'}
                alt="Profile Avatar"
                className="rounded-full object-cover w-full h-full"
              />
            </div>

            {/* Username and Tag */}
            <div className="text-center">
              <div className="text-xl font-semibold text-white">{profileData.username}</div>
              <div className="text-gray-400 text-sm">{profileData.tag}</div>
            </div>

            {/* Skills */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-white">Skills</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {profileData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-[#5865f2] text-white px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white">Achievements</h3>
              <ul className="mt-2 text-gray-400">
                {profileData.achievements.map((achievement, index) => (
                  <li key={index} className="text-sm">- {achievement}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Section: Other Details */}
          <div className="w-full md:w-2/3 space-y-6">
            {/* Coins Section */}
            <div>
              <h3 className="text-lg font-semibold text-white">Coins</h3>
              <div className="bg-[#202225] p-4 rounded-md mt-2">
                <div className="flex justify-between items-center">
                  <div className="text-gray-400">Current Balance:</div>
                  <div className="text-white text-xl font-bold">{profileData.coins} Coins</div>
                </div>
              </div>
            </div>

            {/* Achievement, Mentorship, and Redeem Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AchievementSection />
              <CoinsSection />
              <MentorshipSection />
              <RedeemSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;

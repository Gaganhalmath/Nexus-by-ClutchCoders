import React, { useState } from 'react';
import { User, Settings } from 'lucide-react';
import ProfileModal from '../profile/ProfileModal';
import { FiShield } from 'react-icons/fi'; 

const UserProfile: React.FC<{ isMentor: boolean }> = ({ isMentor }) => { 
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Dummy data for profile (replace with actual profile data)
  const profileData = {
    avatar: '/blank-profile-icon.jpg',
    username: 'Test-User',
    tag: '#0001',
    skills: ['Web Development', 'UI/UX Design', 'SEO'],
    achievements: ['Completed 50 projects', '100+ clients', 'Top 10% freelancer'],
    coins: 1200,
  };

  return (
    <>
      <div
        className="p-4 bg-[#292b2f] flex items-center justify-between cursor-pointer hover:bg-[#34373c]"
        onClick={() => setIsProfileOpen(true)}
      >
        <div className="flex items-center">
          <div className="w-16 h-16 rounded-full bg-[#805ad5] flex items-center justify-center">
            <img
              src={profileData.avatar}
              alt="Profile"
              className="rounded-full object-cover w-full h-full"
            />
          </div>
          <div className="ml-4">
            <div className="text-white text-xl font-medium flex items-center">
              {profileData.username}
              {/* Conditionally render the Mentor Badge */}
              {isMentor && (
                <div className="flex items-center ml-2">
                  <FiShield className="text-yellow-500" size={20} />
                  <span className="text-white ml-1">M</span> {/* Render the "M" badge */}
                </div>
              )}
            </div>
            <div className="text-gray-400 text-sm">{profileData.tag}</div>
          </div>
        </div>
        <Settings className="h-5 w-5 text-gray-400" />
      </div>

      {/* Profile Modal */}
      {isProfileOpen && (
        <ProfileModal onClose={() => setIsProfileOpen(false)} profileData={profileData} isMentor={isMentor} />

      )}
    </>
  );
};

export default UserProfile;

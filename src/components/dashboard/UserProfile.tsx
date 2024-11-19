import React, { useState } from 'react';
import { User, Settings } from 'lucide-react';
import ProfileModal from '../profile/ProfileModal';

const UserProfile: React.FC = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Dummy data for profile (replace with actual profile data)
  const profileData = {
    avatar: '/Gagan.jpeg',
    username: 'Gagan',
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
          <div className="w-16 h-16 rounded-full bg-[#5865f2] flex items-center justify-center">
            <img
              src={profileData.avatar}
              alt="Profile"
              className="rounded-full object-cover w-full h-full"
            />
          </div>
          <div className="ml-4">
            <div className="text-white text-xl font-medium">{profileData.username}</div>
            <div className="text-gray-400 text-sm">{profileData.tag}</div>
          </div>
        </div>
        <Settings className="h-5 w-5 text-gray-400" />
      </div>

      {/* Profile Modal */}
      {isProfileOpen && (
        <ProfileModal onClose={() => setIsProfileOpen(false)} profileData={profileData} />
      )}
    </>
  );
};

export default UserProfile;

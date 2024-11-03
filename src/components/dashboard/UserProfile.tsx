import React, { useState } from 'react';
import { User, Settings } from 'lucide-react';
import ProfileModal from '../profile/ProfileModal';

const UserProfile: React.FC = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <>
      <div 
        className="p-4 bg-[#292b2f] flex items-center justify-between cursor-pointer hover:bg-[#34373c]"
        onClick={() => setIsProfileOpen(true)}
      >
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-[#5865f2] flex items-center justify-center">
            <User className="h-5 w-5 text-white" />
          </div>
          <div className="ml-2">
            <div className="text-white text-sm font-medium">User</div>
            <div className="text-gray-400 text-xs">#0001</div>
          </div>
        </div>
        <Settings className="h-5 w-5 text-gray-400" />
      </div>
      {isProfileOpen && <ProfileModal onClose={() => setIsProfileOpen(false)} />}
    </>
  );
}

export default UserProfile;

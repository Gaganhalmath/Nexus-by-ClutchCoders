import React from 'react';
import { Users, Sun, Moon } from 'lucide-react';
import UserProfile from './UserProfile';

interface ChannelSidebarProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

const CommunityItem: React.FC<{ name: string }> = ({ name }) => (
  <div className="flex items-center text-gray-400 hover:text-gray-200 hover:bg-[#36393f] px-2 py-1 rounded cursor-pointer">
    <Users className="h-5 w-5 mr-1" />
    <span>{name}</span>
  </div>
);

const ChannelSidebar: React.FC<ChannelSidebarProps> = ({  }) => {
  return (
    <div className="w-60 bg-[#2f3136] flex flex-col">
      <div className="p-4 shadow-md flex items-center justify-between">
        <h2 className="text-white font-bold">Nexus</h2>
        {/*<button
          onClick={onToggleDarkMode}
          className="text-gray-400 hover:text-white"
        >
          {isDarkMode ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </button>*/}
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="px-2 py-3">
          <div className="text-gray-400 uppercase text-xs font-semibold mb-2">Communities</div>
          <CommunityItem name="Web Development" />
          <CommunityItem name="Mobile Development" />
          <CommunityItem name="Data Science" />
        </div>
      </div>
      <UserProfile />
    </div>
  );
};

export default ChannelSidebar;

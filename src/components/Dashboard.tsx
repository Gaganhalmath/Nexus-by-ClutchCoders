import React from 'react';
import ServerSidebar from './dashboard/ServerSidebar';
import ChannelSidebar from './dashboard/ChannelSidebar';
import ChatArea from './dashboard/ChatArea';
import UserProfile from './dashboard/UserProfile'
const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-[#36393f]">
      <ServerSidebar />
      <ChannelSidebar isDarkMode={false} onToggleDarkMode={() => {}} />
      <ChatArea />
      <UserProfile />
    </div>
  );
};

export default Dashboard;

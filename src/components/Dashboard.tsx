import React from 'react';
import { useNavigate } from 'react-router-dom';
import ServerSidebar from './dashboard/ServerSidebar';
import ChannelSidebar from './dashboard/ChannelSidebar';
import ChatArea from './dashboard/ChatArea.tsx';

//import UserProfile from 'D:/Nexus-2.0/src/components/dashboard/UserProfile.tsx';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-[#36393f]">
      <ServerSidebar />
     <ChannelSidebar isDarkMode={false} onToggleDarkMode={() => {}} />
      <ChatArea />

      {/* Add button to navigate to Mentorship Section */}
      <div className="absolute bottom-4 right-4">
        <button
          onClick={() => navigate('/mentorship')}
          className="px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-blue-600"
        >
          Go to Mentorship
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ServerSidebar from 'D:/Nexus-2.0/src/components/dashboard/ServerSidebar.tsx';
import ChannelSidebar from 'D:/Nexus-2.0/src/components/dashboard/ChannelSidebar';
import ChatArea from 'D:/Nexus-2.0/src/components/dashboard/ChatArea.tsx';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<string[]>([]); // State to store messages

  const handleSendMessage = (message: string) => {
    console.log('Message sent:', message); // Log the message or process it as needed
    setMessages((prev) => [...prev, message]); // Store the message in state
  };

  return (
    <div className="flex h-screen bg-[#36393f]">
      <ServerSidebar />
      <ChannelSidebar isDarkMode={false} onToggleDarkMode={() => {}} />

       {/* Chat Area */}
      <ChatArea onSendMessage={handleSendMessage} />
      {/* Mentorship Navigation Button */}
      <div className="absolute bottom-28 right-4">
        <button
          onClick={() => navigate('/mentorship')}
          className="px-4 py-4 bg-violet-600 text-white rounded-md hover:bg-blue-600"
        >
          Go to Mentorship
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

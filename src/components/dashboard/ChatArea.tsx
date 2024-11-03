import React from 'react';
import { Hash, Users, Search, Bell, HelpCircle } from 'lucide-react';

const ChatArea: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col">
      <div className="h-12 flex items-center px-4 shadow-md bg-[#36393f] border-b border-[#202225]">
        <Hash className="h-6 w-6 text-gray-400 mr-2" />
        <span className="text-white font-bold">#general</span>
        <div className="ml-auto flex items-center space-x-4">
          <Bell className="h-5 w-5 text-gray-400 cursor-pointer" />
          <Users className="h-5 w-5 text-gray-400 cursor-pointer" />
          <Search className="h-5 w-5 text-gray-400 cursor-pointer" />
          <HelpCircle className="h-5 w-5 text-gray-400 cursor-pointer" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="text-gray-400 text-center">
          Welcome to #general! This is the start of the Forum.
        </div>
      </div>

      <div className="p-4">
        <div className="bg-[#40444b] rounded-lg p-4">
          <input
            type="text"
            placeholder="Message #general"
            className="w-full bg-transparent text-white outline-none placeholder-gray-400"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatArea;

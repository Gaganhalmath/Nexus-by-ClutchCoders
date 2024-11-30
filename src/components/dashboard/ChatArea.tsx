import React, { useState } from 'react';
import { Hash, Users, Search, Bell, HelpCircle } from 'lucide-react';


const ChatArea: React.FC<{ onSendMessage: (message: string) => void }> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState<string[]>([]); // Local state for chat messages

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message); // Send the message to the parent in dashboard
      setChatMessages((prev) => [...prev, message]); // Add the message locally
      setMessage(''); // Clear the input field
    }
  };

  return (
    <div className="flex-1 flex flex-col">
      {/* Header */}
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

      {/* Chat Messages Section */}
<div className="flex-1 overflow-y-auto p-4">
  <div className="text-gray-400 text-center mb-4">
    Welcome to #general! This is the start of the Forum.
  </div>
  {chatMessages.map((msg, index) => (
    <div
      key={index}
      className="bg-[#483471] text-white p-3 rounded-lg shadow-lg animate-slide-in mb-2"
      style={{
        wordBreak: 'break-word', // i have used this to make sure long words will break to next line
        
        maxWidth: '15%', //i have set this to 12% bcz it takes up whole line like its been stretched
        marginBottom: '10px', //this is to differentiate between messages adds margin
        display: 'block', //this i have used to solve the problem where the messages were alligning on the same line 
        whiteSpace:'normal', //this will keep messages inside the tile
       
      }}
    >
      {msg}
    </div>
  ))}
</div>



{/* Message Input Section */}
<div className="p-4">
  <div className="bg-[#40444b] rounded-lg p-4">
    <input
      type="text"
      value={message}
      onChange={(e) => setMessage(e.target.value)} // Update state on input change
      placeholder="Message #general"
      className="w-full bg-transparent text-white outline-none placeholder-gray-400"
    />
  </div>
  <button
    onClick={handleSend}
    className="mt-1 px-4 py-2 bg-violet-600 text-white rounded-md transform transition-transform hover:scale-105 active:scale-95"
  >
    Send
  </button>
</div>

    </div>
  );
};

export default ChatArea;

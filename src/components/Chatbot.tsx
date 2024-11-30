import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <style>
        {`
          /* Chatbot Button Styles */
          .chatbot-button {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
            background-color: #805ad5;
            color: white;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border: none;
            cursor: pointer;
            transition: transform 0.3s ease, background-color 0.3s ease;
          }

          .chatbot-button:hover {
            background-color: #805ad5;
          }

          .chatbot-button.open {
            transform: rotate(270deg); /* Rotates the button when open */
          }

          /* Chatbot Container */
          .chatbot-container {
            position: fixed;
            bottom: 80px;
            right: 20px;
            width: 400px;
            height: 500px;
            z-index: 1000;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.3s ease, transform 0.3s ease;
            pointer-events: none;
          }

          .chatbot-container.visible {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
          }

          .chatbot-iframe {
            width: 100%;
            height: 100%;
            border: none;
            background-color: white;
          }
        `}
      </style>

      {/* Chatbot Toggle Button */}
      <button
        onClick={toggleChatbot}
        className={`chatbot-button ${isOpen ? 'open' : ''}`}
        aria-label="Toggle Chatbot"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chatbot Iframe */}
      <div className={`chatbot-container ${isOpen ? 'visible' : ''}`}>
        <iframe
          src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/11/21/17/20241121173537-6XDHQAV5.json"
          className="chatbot-iframe"
          title="Botpress Chatbot"
        ></iframe>
      </div>
    </>
  );
};

export default Chatbot;

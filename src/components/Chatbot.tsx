import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track if the chatbot is open or minimized

  // Function to toggle chatbot state
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : 'minimized'}`}>
      {!isOpen && (
        <div className="chatbot-icon" onClick={toggleChatbot}>
          💬
          <div className="notification-badge"></div> {/* Notification indicator */}
        </div>
      )}

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h4>Chatbot</h4>
            <button onClick={toggleChatbot} className="minimize-btn">
              –
            </button>
          </div>
          <div className="chatbot-content">
            <p>Hi there! How can I help you today?</p>
          </div>
          <div className="chatbot-footer">
            <input type="text" placeholder="Type a message..." />
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

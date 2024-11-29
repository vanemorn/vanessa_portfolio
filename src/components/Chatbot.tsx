import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);
  const [userInput, setUserInput] = useState('');

  // Predefined responses for the chatbot
  const botResponses: { [key: string]: string } = {
    hello: 'Hi there! How can I help you today?',
    how: 'I am doing well, thank you for asking!',
    default: 'Sorry, I didn’t quite get that. Can you rephrase your question?',
  };

  // Function to handle sending messages
  const sendMessage = () => {
    if (userInput.trim()) {
      const botReply =
        botResponses[userInput.toLowerCase()] || botResponses.default; // Get bot response
      setMessages([...messages, { user: userInput, bot: botReply }]);
      setUserInput(''); // Clear user input after sending
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <h3>Chatbot</h3>
      </div>
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div key={index} className="chatbot-message">
            <div className="user-message">{msg.user}</div>
            <div className="bot-message">{msg.bot}</div>
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Ask me something..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;

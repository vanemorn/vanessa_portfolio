import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track if the chatbot is open or minimized
  const [userInput, setUserInput] = useState(''); // State for user's input
  const [messages, setMessages] = useState<string[]>([]); // State to store conversation messages

  // Function to toggle chatbot state
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  // Function to send user message
  const sendMessage = () => {
    if (userInput.trim() !== '') {
      setMessages([...messages, `You: ${userInput}`]);
      setUserInput('');
    }
  };

  // Function to handle pre-made questions
  const handlePreMadeQuestion = (question: string) => {
    setMessages([...messages, `You: ${question}`]);
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
            {messages.map((msg, index) => (
              <p key={index}>{msg}</p>
            ))}
          </div>
          <div className="chatbot-footer">
            <input
              type="text"
              placeholder="Type a message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
          </div>

          <div className="pre-made-questions">
            <p>Select a question:</p>
            <button onClick={() => handlePreMadeQuestion('What design services do you offer?')}>What design services do you offer?</button>
            <button onClick={() => handlePreMadeQuestion('Can you help with branding and logo design?')}>Can you help with branding and logo design?</button>
            <button onClick={() => handlePreMadeQuestion('What are your rates for graphic design?')}>What are your rates for graphic design?</button>
            <button onClick={() => handlePreMadeQuestion('Do you offer website design services?')}>Do you offer website design services?</button>
            <button onClick={() => handlePreMadeQuestion('How long does a design project take?')}>How long does a design project take?</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

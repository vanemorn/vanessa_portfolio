import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track if the chatbot is open or minimized
  const [message, setMessage] = useState(''); // State to store the input message
  const [conversation, setConversation] = useState<{ user: string; bot: string | JSX.Element }[]>([]); // State to store conversation history

  // Default predefined questions and answers
  const defaultQuestions = [
    {
      question: 'What graphic design services do you offer?',
      answer: (
        <span>
          I specialize in a wide range of graphic design services, including:
          <ul>
            <li>Logo Design</li>
            <li>Brand Identity</li>
            <li>Website & App Design</li>
            <li>Print Materials</li>
            <li>Social Media Graphics</li>
          </ul>
          Let me know if you need more details!
        </span>
      ),
    },
    {
      question: 'How do I get started with a design project?',
      answer: (
        <span>
          Getting started is simple! Just follow these steps:
          <ol>
            <li>Initial Consultation</li>
            <li>Proposal & Quote</li>
            <li>Design Phase</li>
            <li>Feedback & Revisions</li>
            <li>Final Delivery</li>
          </ol>
          If you're ready to start, feel free to <a href="mailto:vanessamorenoperez55@gmail.com"><button className="contact-btn">Contact me via email</button></a>.
        </span>
      ),
    },
    {
      question: 'Can I see some of your previous work?',
      answer: (
        <span>
          Of course! You can view my portfolio and some of my recent projects on my website.
          <br />
          Visit my <a href="https://vanemorn.github.io/vanessa_portfolio/Projects" target="_blank" rel="noopener noreferrer">Projects Page</a> to see examples of my work.
        </span>
      ),
    },
  ];

  // Function to toggle chatbot state
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    setConversation([]); // Clear conversation when toggling open
  };

  // Function to handle the button click for default questions
  const handleQuestionClick = (question: string, answer: JSX.Element | string) => {
    setConversation([
      ...conversation,
      { user: question, bot: answer }, // Add the question and answer to the conversation
    ]);
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
            {conversation.length === 0 ? (
              <p>Hi there! How can I help you today?</p>
            ) : (
              conversation.map((msg, index) => (
                <div key={index} className="message">
                  <p><strong>You:</strong> {msg.user}</p>
                  <p><strong>Bot:</strong> {msg.bot}</p>
                </div>
              ))
            )}

            {/* Show the 3 default questions */}
            {conversation.length === 0 && (
              <div className="question-buttons">
                {defaultQuestions.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuestionClick(item.question, item.answer)}
                    className="question-btn"
                  >
                    {item.question}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="chatbot-footer">
            <input 
              type="text" 
              placeholder="Type a message..." 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
            />
            <button onClick={() => handleQuestionClick(message, 'This is a custom message!')}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Chatbot.css';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track if the chatbot is open or minimized
  const [conversation, setConversation] = useState<{ sender: string; message: string | JSX.Element }[]>([]); // Conversation state
  const [showButtons, setShowButtons] = useState(false); // State to control button visibility

  const chatContentRef = useRef<HTMLDivElement>(null); // Reference for chat content to control scrolling

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
          If you're ready to start, feel free to{' '}
          <a href="mailto:vanessamorenoperez55@gmail.com">
            <button className="contact-btn">Contact me via email</button>
          </a>
          .
        </span>
      ),
    },
    {
      question: 'Can I see some of your previous work?',
      answer: (
        <span>
          Of course! You can view my portfolio and some of my recent projects on this website.
          <br />
          Visit{' '}
          <Link to="/projects">Projects Page</Link> to see examples of my work.
        </span>
      ),
    },
  ];

  // Function to toggle chatbot state
  const toggleChatbot = () => {
    setIsOpen(!isOpen); // Toggle chatbot visibility
    if (!isOpen) {
      setConversation([]); // Clear conversation when opening the chatbot
      setShowButtons(false); // Hide buttons when the window is opened
    }
  };

  // Function to handle the button click for default questions
  const handleQuestionClick = (question: string, answer: string | JSX.Element) => {
    // First, we add the user's question to the conversation
    setConversation((prev) => [
      ...prev,
      { sender: 'user', message: question },
    ]);

    // Then, we add the bot's answer after a slight delay to simulate a response
    setTimeout(() => {
      setConversation((prev) => [
        ...prev,
        { sender: 'bot', message: answer },
      ]);
      setShowButtons(true); // Show the question options again after the bot's answer
    }, 500); // Delay to simulate typing
  };

  // Function to show the question buttons
  const showQuestionButtons = () => {
    return (
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
    );
  };

  // Scroll to the bottom every time the conversation is updated
  useEffect(() => {
    if (chatContentRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
    }
  }, [conversation]);

  // Show the initial greeting when the window is opened
  useEffect(() => {
    if (isOpen) {
      setConversation([]); // Reset conversation when opening
      setShowButtons(false); // Hide buttons initially

      // Set the initial greeting message
      setConversation((prev) => [
        ...prev,
        { sender: 'bot', message: 'Hi there! How can I help you today?' },
      ]);
      setShowButtons(true); // Show buttons after greeting
    }
  }, [isOpen]);

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
            <h4>Chat with me!</h4>
            <button onClick={toggleChatbot} className="minimize-btn">
              –
            </button>
          </div>
          <div className="chatbot-content" ref={chatContentRef}>
            {conversation.map((msg, index) => (
              <div key={index} className="message">
                {msg.sender === 'user' && <p><strong>You:</strong> {msg.message}</p>}
                {msg.sender === 'bot' && <p><strong>Vanessa:</strong> {msg.message}</p>}
              </div>
            ))}
          </div>
          <div className="chatbot-footer">
            {showButtons && showQuestionButtons()} {/* Re-show question buttons */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

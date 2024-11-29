import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track if the chatbot is open or minimized
  const [conversation, setConversation] = useState<{ sender: string; message: string | JSX.Element }[]>([]); // Conversation state
  const [showButtons, setShowButtons] = useState(false); // State to control button visibility
  const [isTyping, setIsTyping] = useState(false); // Define the isTyping state to track the typing status

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
          <a href="https://vanemorn.github.io/vanessa_portfolio/projects" target="_blank" rel="noopener noreferrer">
            Projects Page
          </a>{' '}
          to see examples of my work.
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

  // Function to simulate the bot typing (typing animation)
  const typeMessage = (message: string) => {
    let i = 0;
    setIsTyping(true); // Set the bot as typing
    const interval = setInterval(() => {
      setConversation((prev) => {
        const lastMessage = prev[prev.length - 1];
        if (lastMessage && lastMessage.sender === 'bot') {
          // Update the last bot message with one character at a time
          return [
            ...prev.slice(0, prev.length - 1),
            { sender: 'bot', message: lastMessage.message + message[i] },
          ];
        } else {
          return [...prev, { sender: 'bot', message: message[i] }];
        }
      });
      i += 1;
      if (i === message.length) {
        clearInterval(interval); // Stop once the message is fully typed
        setIsTyping(false); // Mark typing as finished
        setShowButtons(true); // Show question options after typing
      }
    }, 50); // Typing speed: 50ms per character
  };

  // Function to handle the button click for default questions
  const handleQuestionClick = (question: string, answer: string | JSX.Element) => {
    // First, we add the user's question to the conversation
    setConversation((prev) => [
      ...prev,
      { sender: 'user', message: question },
    ]);

    // Then, simulate typing for the bot's response
    setTimeout(() => {
      typeMessage(answer as string); // Call typing animation for bot response
    }, 500); // Delay before bot starts typing (simulate thinking time)
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

      // Set the initial greeting message with typing effect
      setConversation((prev) => [
        ...prev,
        { sender: 'bot', message: '' }, // Empty message to start typing
      ]);
      setTimeout(() => {
        typeMessage('Hi there! How can I help you today?'); // Simulate typing for greeting
      }, 500); // Delay before bot starts typing
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
            {/* Show typing indicator when the bot is typing */}
            {isTyping && (
              <div className="typing-indicator">
                <span>Vanessa is typing...</span>
              </div>
            )}
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

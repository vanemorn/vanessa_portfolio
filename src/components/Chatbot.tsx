import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [conversation, setConversation] = useState<{ sender: string; message: string | JSX.Element }[]>([]);
  const [showButtons, setShowButtons] = useState(false);
  const chatContentRef = useRef<HTMLDivElement>(null);

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
    setIsOpen(!isOpen);
    if (!isOpen) {
      setConversation([]); // Clear conversation when opening the chatbot
      setShowButtons(false); // Hide buttons when the window is opened
    }
  };

  // Function to simulate typing effect
  const typeMessage = (message: string | JSX.Element, sender: string, delay: number) => {
    if (typeof message === 'string') {
      let currentIndex = 0;
      const typedMessage = (prev: string[]) => {
        if (currentIndex < message.length) {
          prev.push(message[currentIndex]);
          currentIndex++;
          setConversation((prevConv) => [
            ...prevConv,
            { sender, message: prev.join('') },
          ]);
        } else {
          // Once the message is fully typed, show the next step (e.g., show buttons)
          if (sender === 'bot') {
            setShowButtons(true); // Show buttons after typing is complete
          }
        }
      };
      // Type the message one character at a time
      const typingInterval = setInterval(() => typedMessage([]), 100);
      setTimeout(() => clearInterval(typingInterval), delay + message.length * 100); // Stop after full typing
    } else {
      setConversation((prev) => [
        ...prev,
        { sender, message },
      ]);
    }
  };

  // Function to handle question click
  const handleQuestionClick = (question: string, answer: string | JSX.Element) => {
    setConversation((prev) => [...prev, { sender: 'user', message: question }]);
    setShowButtons(false); // Hide buttons while answering

    // Simulate bot's response after a delay
    setTimeout(() => {
      typeMessage(answer, 'bot', 1000); // Delay typing the answer
    }, 500);
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

  // Scroll to the bottom of the conversation
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

      // Initial greeting message
      setTimeout(() => {
        typeMessage('Hi there! How can I help you today?', 'bot', 2000);
      }, 1000);
    }
  }, [isOpen]);

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : 'minimized'}`}>
      {!isOpen && (
        <div className="chatbot-icon" onClick={toggleChatbot}>
          💬
          <div className="notification-badge"></div>
        </div>
      )}

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <span>Chatbot</span>
            <button className="minimize-btn" onClick={toggleChatbot}>
              -
            </button>
          </div>
          <div className="chatbot-content" ref={chatContentRef}>
            {conversation.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}-message`}>
                <p>{msg.message}</p>
              </div>
            ))}
          </div>
          <div className="chatbot-footer">
            {showButtons && showQuestionButtons()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

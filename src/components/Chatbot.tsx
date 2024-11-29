import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track if the chatbot is open or minimized
  const [conversation, setConversation] = useState<{ user: string; bot: string | JSX.Element }[]>([]); // Conversation state
  const [botMessage, setBotMessage] = useState(''); // State to store current bot message
  const [userMessage, setUserMessage] = useState(''); // State for current user message
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
          Of course! You can view my portfolio and some of my recent projects on my website.
          <br />
          Visit my{' '}
          <a href="https://vanemorn.github.io/vanessa_portfolio/Projects" target="_blank" rel="noopener noreferrer">
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

  // Typing effect function
  const simulateTyping = (message: string, isBot: boolean, callback: () => void) => {
    let index = 0;
    const interval = setInterval(() => {
      if (isBot) {
        setBotMessage((prev) => prev + message[index]);
      } else {
        setUserMessage((prev) => prev + message[index]);
      }
      index++;
      if (index === message.length) {
        clearInterval(interval);
        callback(); // Call the callback once typing finishes
      }
    }, 50); // Adjust typing speed (milliseconds)
  };

  // Function to handle the button click for default questions
  const handleQuestionClick = (question: string, answer: string | JSX.Element) => {
    // Prevent adding the same question twice to the conversation
    if (conversation[conversation.length - 1]?.user !== question) {
      setConversation((prev) => [
        ...prev,
        { user: question, bot: '' }, // Add the question and an empty bot response initially
      ]);
    }

    // Simulate bot's typing effect for the answer
    if (typeof answer === 'string') {
      simulateTyping(answer, true, () => {
        setConversation((prev) => [
          ...prev,
          { user: question, bot: botMessage },
          { user: '', bot: showQuestionButtons() }, // Re-show buttons after answer
        ]);
      });
    } else {
      setConversation((prev) => [
        ...prev,
        { user: question, bot: answer },
        { user: '', bot: showQuestionButtons() }, // Re-show buttons after answer
      ]);
    }

    setShowButtons(false); // Hide buttons after a question is asked and answered
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

  // Show the initial greeting with typing effect when the window is opened
  useEffect(() => {
    if (isOpen) {
      setConversation([]); // Reset conversation when opening
      setBotMessage(''); // Clear any previous bot message
      setUserMessage(''); // Clear user message
      simulateTyping('Hi there! How can I help you today?', true, () => {
        setConversation((prev) => [
          ...prev,
          { user: '', bot: botMessage }, // Add the initial greeting
        ]);
        setShowButtons(true); // Now show the buttons after greeting
      });
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
            <h4>Chatbot</h4>
            <button onClick={toggleChatbot} className="minimize-btn">
              –
            </button>
          </div>
          <div className="chatbot-content" ref={chatContentRef}>
            {conversation.map((msg, index) => (
              <div key={index} className="message">
                {msg.user && <p><strong>You:</strong> {userMessage}</p>}
                {msg.bot && <p><strong>Bot:</strong> {botMessage}</p>}
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

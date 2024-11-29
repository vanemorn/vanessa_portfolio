import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [conversation, setConversation] = useState<{ user: string; bot: string | JSX.Element }[]>([]);
  const [showButtons, setShowButtons] = useState(false);
  
  const chatContentRef = useRef<HTMLDivElement>(null);

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

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setConversation([]);
      setShowButtons(false);
    }
  };

  const simulateTyping = (message: string, callback: () => void) => {
    let index = 0;
    const interval = setInterval(() => {
      setConversation((prev) => {
        const updatedConversation = [...prev];
        updatedConversation[updatedConversation.length - 1] = { user: '', bot: message.slice(0, index + 1) };
        return updatedConversation;
      });
      index++;
      if (index === message.length) {
        clearInterval(interval);
        callback();
      }
    }, 50);
  };

  const handleQuestionClick = (question: string, answer: string | JSX.Element) => {
    setConversation((prev) => [
      ...prev,
      { user: question, bot: '' }, 
    ]);

    if (typeof answer === 'string') {
      simulateTyping(answer, () => {
        setConversation((prev) => [
          ...prev,
          { user: question, bot: answer },
          { user: '', bot: showQuestionButtons() },
        ]);
      });
    } else {
      setConversation((prev) => [
        ...prev,
        { user: question, bot: answer },
        { user: '', bot: showQuestionButtons() },
      ]);
    }
    setShowButtons(false);
  };

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

  useEffect(() => {
    if (isOpen) {
      setConversation([]); 
      simulateTyping('Hi there! How can I help you today?', () => {
        setConversation((prev) => [
          ...prev,
          { user: '', bot: 'Hi there! How can I help you today?' }, 
        ]);
        setShowButtons(true);
      });
    }
  }, [isOpen]);

  useEffect(() => {
    if (chatContentRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
    }
  }, [conversation]);

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
            <h4>Chatbot</h4>
            <button onClick={toggleChatbot} className="minimize-btn">–</button>
          </div>
          <div className="chatbot-content" ref={chatContentRef}>
            {conversation.map((msg, index) => (
              <div key={index} className="message">
                {msg.user && <p><strong>You:</strong> {msg.user}</p>}
                {msg.bot && <p><strong>Bot:</strong> {msg.bot}</p>}
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

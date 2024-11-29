import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [conversation, setConversation] = useState<{ user: string; bot: string | JSX.Element }[]>([]); 
  const [botMessage, setBotMessage] = useState(''); 
  const [showButtons, setShowButtons] = useState(false); 

  const chatContentRef = useRef<HTMLDivElement>(null);

  const defaultQuestions = [
    { question: 'What graphic design services do you offer?', answer: 'Here are the services I offer...' },
    { question: 'How do I get started with a design project?', answer: 'Follow these steps...' },
    { question: 'Can I see some of your previous work?', answer: 'Sure! Visit my portfolio...' },
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
      setBotMessage((prev) => prev + message[index]);
      index++;
      if (index === message.length) {
        clearInterval(interval);
        callback(); 
      }
    }, 50); 
  };

  const handleQuestionClick = (question: string, answer: string | JSX.Element) => {
    setConversation((prev) => [...prev, { user: question, bot: answer }]);
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
      setBotMessage(''); 
      simulateTyping('Hi there! How can I help you today?', () => {
        setConversation((prev) => [...prev, { user: '', bot: botMessage }]);
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

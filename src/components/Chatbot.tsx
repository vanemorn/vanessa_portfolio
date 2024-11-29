import React, { useState } from 'react';

const ChatBot = () => {
  const [messages, setMessages] = useState([{ text: "Hello! How can I assist you today?", isBot: true }]);
  const [input, setInput] = useState('');

  // Pre-made questions for a graphic/UX designer chatbot
  const preMadeQuestions = [
    "What services do you offer as a graphic designer?",
    "Can you help me design a logo?",
    "Do you provide web design services?",
    "How do you approach user experience design?",
    "What is your design process like?",
    "Can you show me your portfolio?",
    "What are your design rates?",
    "Can you redesign my website?",
    "How do you handle revisions in design?",
    "What tools do you use for design work?"
  ];

  // Function to handle the send button click
  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isBot: false }]); // Add user message
      setInput('');
      handleBotResponse(input); // Call bot response function (add logic if needed)
    }
  };

  // Function to simulate a bot response
  const handleBotResponse = (userMessage: string) => {
    const botMessage = `You asked about: ${userMessage}`; // Simple echo of the question for now
    setMessages((prevMessages) => [...prevMessages, { text: botMessage, isBot: true }]);
  };

  // Function to handle user typing in the input field
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // Function to handle clicking on a pre-made question
  const handlePreMadeQuestionClick = (question: string) => {
    setInput(question); // Automatically populate the input field with the selected question
  };

  return (
    <div className="chatbot">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={msg.isBot ? 'bot-message' : 'user-message'}>
            {msg.text}
          </div>
        ))}
      </div>

      {/* Display Pre-made Questions as Buttons */}
      <div className="pre-made-questions">
        {preMadeQuestions.map((question, index) => (
          <button
            key={index}
            onClick={() => handlePreMadeQuestionClick(question)}
            className="pre-made-question-btn"
          >
            {question}
          </button>
        ))}
      </div>

      {/* Input area */}
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type a message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;

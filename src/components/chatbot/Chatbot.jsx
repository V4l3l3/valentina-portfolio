// src/components/Chatbot.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './chatbot.css'; // Create a CSS file for styling

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setUserMessage(e.target.value);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!userMessage) return;

    // Update chat history
    const newChatHistory = [...chatHistory, { sender: 'user', text: userMessage }];
    setChatHistory(newChatHistory);
    setUserMessage('');

    try {
      console.log('Sending message to OpenAI:', userMessage); // Log user message
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-4o-mini', // Ensure this model name is correct
        messages: [{ role: 'user', content: userMessage }],
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      });

      console.log('Response from OpenAI:', response.data); // Log the response
      const botMessage = response.data.choices[0]?.message?.content; // Optional chaining for safety
      if (botMessage) {
        setChatHistory([...newChatHistory, { sender: 'bot', text: botMessage }]);
      } else {
        console.error("Bot message not found in the response");
      }
    } catch (error) {
      console.error('Error fetching response from OpenAI:', error);
    }
  };

  return (
    <div className={`chatbot ${isOpen ? 'open' : 'closed'}`}>
      <button className="chatbot-toggle" onClick={toggleChat}>
        {isOpen ? 'Close Chat' : 'Chat'}
      </button>
      {isOpen && (
        <div className="chatbot-window">
          <div className="chat-history">
            {chatHistory.map((message, index) => (
              <div key={index} className={message.sender}>
                <span>{message.sender === 'user' ? 'You: ' : 'Bot: '}</span>
                {message.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleSend}>
            <input
              type="text"
              value={userMessage}
              onChange={handleInputChange}
              placeholder="Type your message..."
              required
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

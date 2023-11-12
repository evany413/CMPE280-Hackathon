// ChatInterface.js
import React, { useState, useEffect  } from 'react';
import OpenAI from 'openai';
import './ChatInterface.css';


const ChatInterface = () => {
  const [Prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [messageHistory, setMessageHistory] = useState([]);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
  }, []);

  const generateResponse = () => {
    const openai = new OpenAI({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY,
      dangerouslyAllowBrowser: true,
    });

    openai.chat.completions
      .create({
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'system',
                content:
                "You are a helpful assistant that can answer a wide range of questions on various topics. Feel free to ask me anything, and I'll do my best to assist you.",
              },
              {
                role: 'user',
                content: Prompt,
              },
          ...messageHistory, // Include previous messages in history
        ],
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      })
      .then((response) => {
        if (response) {
          setResponse(response.choices[0].message.content);
          // Update message history with the new message
          setMessageHistory([
            ...messageHistory,
            { role: 'user', content: Prompt },
            { role: 'assistant', content: response.choices[0].message.content },
          ]);
        }
      });
  };

  const cancelResponse = () => {
    setResponse('');
    setPrompt('');
  };

  return (
    <div className="deloitte-chat-ui">
      {/* Previous Messages */}
      <div className="message-history">
        {messageHistory.map((message, index) => (
          <div key={index} className={message.role}>
            {message.content}
          </div>
        ))}
      </div>

      {/* Current Input */}
      <div>
        <textarea
          className="textarea"
          name="tax_prompt"
          id="tax_promt"
          value={Prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Prompt"
        ></textarea>
      </div>

      {/* Buttons */}
      <div className="buttons d-flex">
        <div onClick={generateResponse} className="d-flex send">
          Send
        </div>
        <div onClick={cancelResponse} className="cancel">
          Cancel
        </div>
      </div>

      {/* Response
      <div className="response-text">
        <textarea
          className="textarea"
          name="response"
          value={response}
          readOnly
          placeholder="Response"
        ></textarea>
      </div> */}
    </div>
  );
};

export default ChatInterface;

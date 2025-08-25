
import React, { useState, useEffect, useRef } from 'react';
// import { GoogleGenAI } from '@google/genai';
import { SparklesIcon, CloseIcon, SendIcon, ChatBubbleIcon } from '../components/Icons';

interface ChatbotContent {
  title: string;
  welcomeMessage: string;
  inputPlaceholder: string;
}

interface ChatbotProps {
  knowledgeBase: string;
  language: 'pt' | 'en';
  content: ChatbotContent;
}

interface Message {
  sender: 'user' | 'ai';
  text: string;
}

const Chatbot: React.FC<ChatbotProps> = ({ knowledgeBase, language, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

  // Add initial welcome message when chat opens or language changes
  useEffect(() => {
    setMessages([{ sender: 'ai', text: content.welcomeMessage }]);
  }, [content.welcomeMessage]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = { sender: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const resp = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: userMessage.text,
          language,
          knowledgeBase
        })
      });

      const data = await resp.json();
      const text =
        typeof data?.text === 'string' && data.text.trim().length > 0
          ? data.text
          : (language === 'pt'
            ? 'Desculpe, ocorreu um erro. Tente novamente.'
            : 'Sorry, an error occurred. Please try again.');

      setMessages(prev => [...prev, { sender: 'ai', text }]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      const errorMessage: Message = { sender: 'ai', text: language === 'pt' ? 'Desculpe, ocorreu um erro. Tente novamente.' : 'Sorry, an error occurred. Please try again.' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Window */}
      <div className={`fixed bottom-28 right-8 z-50 w-80 sm:w-96 bg-gray-800/90 backdrop-blur-md rounded-xl shadow-2xl text-white transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        {/* Header */}
        <div className="flex justify-between items-center p-4 bg-gray-700/50 rounded-t-xl">
          <div className="flex items-center gap-2">
            <ChatBubbleIcon className="w-6 h-6 text-cyan-400" />
            <h3 className="font-bold text-lg">{content.title}</h3>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition-colors">
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Messages */}
        <div className="h-80 p-4 overflow-y-auto">
          <div className="flex flex-col gap-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl ${msg.sender === 'user' ? 'bg-cyan-500 text-white rounded-br-none' : 'bg-gray-700 text-gray-200 rounded-bl-none'}`}>
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] p-3 rounded-2xl bg-gray-700 text-gray-200 rounded-bl-none">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-75"></span>
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-150"></span>
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-300"></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-700">
          <div className="flex items-center bg-gray-700 rounded-full">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={content.inputPlaceholder}
              className="w-full bg-transparent px-4 py-2 text-white placeholder-gray-400 focus:outline-none"
            />
            <button type="submit" disabled={isLoading} className="p-2 text-cyan-400 hover:text-cyan-300 disabled:text-gray-500 transition-colors rounded-full m-1">
              <SendIcon className="w-6 h-6" />
            </button>
          </div>
        </form>
      </div>

      {/* FAB (Floating Action Button) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-cyan-500 text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500 transform hover:scale-110"
        aria-label="Toggle Chatbot"
      >
        {isOpen ? <CloseIcon className="w-7 h-7" /> : <SparklesIcon className="w-7 h-7" />}
      </button>
    </>
  );
};

export default Chatbot;

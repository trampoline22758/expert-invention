import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, User, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from '../../constants';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hi! I can tell you more about my services or skills. Ask me anything!' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input;
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setLoading(true);

    try {
      if (!process.env.API_KEY) {
        throw new Error("API Key not found");
      }

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
            ...messages.map(m => ({ 
                role: m.role, 
                parts: [{ text: m.text }] 
            })),
            { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: AI_SYSTEM_INSTRUCTION,
        },
      });

      const text = response.text || "I'm having trouble connecting right now. Please try again later.";
      
      setMessages(prev => [...prev, { role: 'model', text }]);

    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm currently offline (API Key missing or error). Feel free to email me instead!" }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-[350px] max-w-[90vw] h-[500px] flex flex-col rounded-2xl overflow-hidden backdrop-blur-2xl bg-slate-900/80 border border-white/20 shadow-2xl"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-purple-600/50 to-blue-600/50 flex justify-between items-center border-b border-white/10">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-300" />
                <h3 className="font-bold text-white">Lumina AI Assistant</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-white/70" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`
                    max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed
                    ${msg.role === 'user' 
                      ? 'bg-purple-600 text-white rounded-tr-none' 
                      : 'bg-white/10 text-white/90 rounded-tl-none border border-white/10'}
                  `}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                   <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none flex gap-1 items-center">
                     <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                     <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                     <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                   </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-slate-950/50">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask about my rates, skills..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all placeholder:text-white/30"
                />
                <button
                  onClick={handleSend}
                  disabled={loading || !input.trim()}
                  className="p-2 bg-purple-600 rounded-full text-white hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg shadow-purple-500/30 text-white z-50 border border-white/20"
      >
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        
        {/* Tooltip */}
        {!isOpen && (
            <div className="absolute right-full mr-4 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Ask AI about me
            </div>
        )}
      </motion.button>
    </div>
  );
};

export default AiAssistant;
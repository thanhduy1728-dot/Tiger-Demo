
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';

interface Message {
  role: 'user' | 'ai';
  text: string;
}

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: 'Xin chào! Tôi là Đại sứ ảo của Tiger Beer. Bạn muốn khám phá điều gì về dòng bia huyền thoại này?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await getGeminiResponse(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: response || '' }]);
    setIsLoading(false);
  };

  return (
    <section id="ai-assistant" className="py-20 bg-[#001a3d]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black italic uppercase mb-4">Trò chuyện cùng <span className="text-[#ff6600]">Tiger AI</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto italic">Khám phá mọi bí mật đằng sau những giọt bia vàng óng ả và tinh thần mãnh hổ.</p>
        </div>

        <div className="bg-[#00285a] rounded-3xl overflow-hidden shadow-2xl border border-white/5 flex flex-col h-[600px]">
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  msg.role === 'user' 
                    ? 'bg-[#ff6600] text-white rounded-br-none' 
                    : 'bg-[#0033a0] text-white rounded-bl-none border border-white/10'
                }`}>
                  <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#0033a0] rounded-2xl px-4 py-3 rounded-bl-none border border-white/10">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce delay-75"></div>
                    <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce delay-150"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="p-4 bg-[#001a3d]/50 border-t border-white/10">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Hỏi bất cứ điều gì về Tiger..."
                className="flex-1 bg-[#00285a] border border-white/10 rounded-full px-6 py-3 focus:outline-none focus:border-[#ff6600] transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-[#ff6600] hover:bg-orange-600 disabled:opacity-50 px-6 py-3 rounded-full transition-all font-bold"
              >
                Gửi
              </button>
            </div>
            <p className="text-[10px] text-center mt-3 text-gray-500 italic">Thưởng thức có trách nhiệm. Đã uống rượu bia, không lái xe.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIChat;

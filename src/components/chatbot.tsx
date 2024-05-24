import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { alternative, prompts, replies } from '@/constants/chatbot';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}


const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isopen, setIsOpen]:any = useState<boolean>(false);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (text: string) => {
    if (text.trim() === '') return;
    const userMessage: Message = { sender: 'user', text };
    const botResponse = getBotResponse(text);
    setMessages(prevMessages => [...prevMessages, userMessage, { sender: 'bot', text: botResponse }]);

    textToSpeech(botResponse);
  };

  const getBotResponse = (input: string): string => {
    let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
    text = text
      .replace(/ a /g, " ")
      .replace(/i feel /g, "")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "")
      .replace(/r u/g, "are you");

    let product = alternative[Math.floor(Math.random() * alternative.length)];
    for (let i = 0; i < prompts.length; i++) {
      for (let j = 0; j < prompts[i].length; j++) {
        if (prompts[i][j] === text) {
          product = replies[i][Math.floor(Math.random() * replies[i].length)];
        }
      }
    }

    if (text.match(/thank/gi)) {
      product = "You're welcome!";
    } 
    // else if (text.match(/(corona|covid|virus)/gi)) {
    //   product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
    // }

    return product;
  };

  const textToSpeech = (text: string) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    synth.speak(utterance);
  };

  return (
    <div className='fixed bottom-10 right-10 z-50'>
        { isopen && 
         <div className="absolute bottom-12 right-0 rounded-md chatbox__support">
         <div className="flex flex-col bg-slate-50 w-[300px] h-[450px] transition-all duration-500 ease-in-out rounded-md">
            {/* ChatBot Header */}
             <div className="chatbox__header rounded-t-md p-2">
                 <div className="mr-4 flex items-center">
                     <img src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png" width={40} height={40} alt="image"/>
                     <h4 className="font-bold text-white">Chat support</h4>
                 </div>
                 <div className="chatbox__content--header">
                     <p className="text-white text-sm">Hi. My name is Sam. How can I help you?</p>
                 </div>
             </div>

            {/* ChatBot Messages */}
             <div className="chatbox__messages">
                <div className="flex flex-col h-full">
                <div className="flex-1 overflow-y-auto">
                    <div id="messages" className="messages space-y-2 p-2">
                    {messages.map((message, index) => (
                        <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                            {message.text}
                        </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                    </div>
                </div>
                </div>
             </div>

             {/* ChatBot Footer */}
             <div className="chatbox__footer rounded-b-md">
             <input
                    id="input"
                    type="text"
                    placeholder="Ask me..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                        handleSendMessage(inputValue);
                        setInputValue('');
                        }
                    }}
                    className="flex-1 mr-2"
                    />
                    <Button onClick={() => {
                    handleSendMessage(inputValue);
                    setInputValue('');
                    }} className='text-white'>Send</Button>
             </div>
         </div>
            
            </div>
        }

      
      <div className="chatbox__button">
            <button onClick={()=> setIsOpen(!isopen)}><img src="https://www.svgrepo.com/show/6995/chat.svg" width={20} height={20}/></button>
        </div>
    </div>
  );
};

export default Chatbot;
       
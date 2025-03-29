import { useState } from 'react';

export default function ChatWindow({ org }) {
  const [messages, setMessages] = useState([
    { role: 'system', content: `Welcome to ${org}'s assistant!` },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');

    // Placeholder for backend GPT call
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: `Echo: ${input}` },
      ]);
    }, 1000);
  };

  return (
    <div className="flex-1 flex flex-col p-4 space-y-4 overflow-y-auto">
      <div className="flex-1 overflow-y-auto">
        {messages.map((msg, i) => (
          <div key={i} className={`mb-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block px-4 py-2 rounded-lg ${msg.role === 'user' ? 'bg-blue-700' : 'bg-gray-800'}`}>
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      <div className="flex space-x-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          className="flex-1 p-2 rounded bg-gray-800 border border-gray-600 text-white"
          placeholder="Type your message..."
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white"
        >
          Send
        </button>
      </div>
    </div>
  );
}

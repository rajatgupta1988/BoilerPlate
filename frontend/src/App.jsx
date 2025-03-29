import { useState, useEffect } from 'react';
import ChatWindow from './components/ChatWindow';

function App() {
  const [org, setOrg] = useState("OrgX");
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <header className="p-4 border-b border-gray-700 flex justify-between items-center">
        <h1 className="text-2xl font-bold">CoreSight GPT</h1>

        <div className="flex items-center gap-4">
          {/* Org Selector */}
          <div>
            <span className="text-sm mr-2">Org:</span>
            <select
              value={org}
              onChange={(e) => setOrg(e.target.value)}
              className="bg-gray-800 text-white border border-gray-600 rounded px-2 py-1"
            >
              <option value="OrgX">OrgX</option>
              <option value="OrgY">OrgY</option>
            </select>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 text-sm border border-gray-500 rounded hover:bg-gray-700"
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </header>

      <ChatWindow org={org} />
    </div>
  );
}

export default App;

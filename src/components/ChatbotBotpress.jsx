import { useState } from "react";
import { Headset } from "lucide-react";

export default function ChatbotBotpress() {
  const [isOpen, setIsOpen] = useState(false);

  const chatUrl =
    "https://cdn.botpress.cloud/webchat/v3.6/shareable.html?configUrl=https://files.bpcontent.cloud/2026/03/27/20/20260327202425-2A61DQTJ.json";

  return (
    <div>
      {/* 🔵 Button Toggle dengan icon Lucide */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center bg-[#7C3AED] text-white shadow-lg transition-all hover:bg-white hover:text-blue-600"
      >
        <Headset size={26} />
      </button>

      {/* 💬 Chatbot */}
      {isOpen && (
        <>
          {/* 📦 Iframe Chatbot */}
          <iframe
            src={chatUrl}
            title="WindBright Chatbot"
            className="fixed bottom-20 right-5 w-[90%] md:w-96 h-[60vh] md:h-[600px] border-none rounded-xl shadow-2xl z-40"
          />
        </>
      )}
    </div>
  );
}

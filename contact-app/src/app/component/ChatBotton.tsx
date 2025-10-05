"use client";
import { TbMessageChatbotFilled } from "react-icons/tb";

const ChatButton = () => {
    return (
        <button className="fixed bottom-4 right-4 bg-[#4b9fbe] text-white p-4 rounded-full shadow-lg transition">
  {/* The icon */}
  <TbMessageChatbotFilled className="text-2xl" />

  {/* The badge */}
  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1 shadow">
    1
  </span>
</button>

    );
}

export default ChatButton;
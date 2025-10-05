"use client";
import { IoMdContact } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import { ImHammer2 } from "react-icons/im";
import { PiExclamationMarkFill } from "react-icons/pi";
import { usePathname } from "next/dist/client/components/navigation";

const listNavItems = [
  { name: "User Profile", href: "/", isDisabled: false, icon: <IoMdContact /> },
  { name: "Text", href: "#", isDisabled: true, icon: <IoDocumentText /> },
  { name: "Legal", href: "#", isDisabled: true, icon: <ImHammer2 /> },
    { name: "Disclaimer", href: "#", isDisabled: true, icon: <PiExclamationMarkFill /> },
];
const SideBar = () => {
const pathname = usePathname();

  return (
    <div className="w-52 h-full bg-[#1e5063] text-white p-4 rounded-tr-2xl content-center shadow-2xl shadow-gray-800">
      <nav>
        <ul>
          {listNavItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            
            return(
            <li key={item.name} className={`mb-2 ${item.isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
              <a
                href={item.isDisabled ? undefined : item.href}
                className={`flex items-center p-2 hover:bg-gray-700 rounded ${isActive ? 'border-2 rounded-3xl border-[#2c6aa3]' : ''}`}
                onClick={(e) => item.isDisabled && e.preventDefault()}
              >
                <span className="mr-2 text-[#eb4563] text-2xl">{item.icon}</span>
                {item.name}
              </a>
            </li>
          )})}
        </ul>
      </nav>
      <p className="text-sm absolute bottom-0 pb-3">version 1.0</p>
    </div>
  );
};

export default SideBar;
        
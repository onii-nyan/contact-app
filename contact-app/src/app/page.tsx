import ChatButton from "./component/ChatBotton";
import SideBar from "./component/SideBar";
import ContactsPage from "./contacts/page";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
        <div className="flex h-screen bg-white w-full">
          <div className="fixed top-0 left-0 h-screen w-52">
            <SideBar />
          </div>
          <div className="p-16 ml-52 flex-1 overflow-y-auto text-black">
            <ContactsPage/>
          </div>
          <div className="fixed bottom-4 right-4">
            <ChatButton />
          </div>
        </div>
  );
}

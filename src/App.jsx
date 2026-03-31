import Sidebar from "./components/Sidebar";
import ChatList from "./components/ChatList";
import ChatWindow from "./components/ChatWindow";

export default function App() {
  return (
    <div className="h-screen flex bg-[#f5f7fb]">
      <Sidebar />
      <ChatList />
      <ChatWindow />
    </div>
  );
}
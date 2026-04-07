import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";

export default function Chat() {
  return (
    <div className="flex h-screen bg-[#020617] text-white">
      <Sidebar />
      <ChatWindow />
    </div>
  );
}
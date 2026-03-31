import ChatHeader from "./ChatHeader";
import Message from "./Message";
import ChatInput from "./ChatInput";

export default function ChatWindow() {
  return (
    <div className="flex-1 flex flex-col">

      <ChatHeader />

      {/* Messages */}
      <div className="flex-1 p-6 space-y-4 overflow-y-auto bg-[#e5edf5]">
        <Message text="Hey Sherry, what are you up to tonight?" />
        <Message text="Hey Zoe, nothing. You?" isOwn />
        <Message text="I found this cool cafe nearby!" />
      </div>

      <ChatInput />
    </div>
  );
}
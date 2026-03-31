export default function ChatInput() {
  return (
    <div className="p-4 bg-white flex items-center gap-3">

      <input
        type="text"
        placeholder="Type a message..."
        className="flex-1 p-3 rounded-full bg-gray-100 outline-none"
      />

      <button className="bg-blue-500 text-white px-5 py-2 rounded-full">
        Send
      </button>
    </div>
  );
}
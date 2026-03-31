const chats = [
  { name: "Andrew Hopkins", msg: "Sure, I'll do that", time: "03:54" },
  { name: "Zoe Roberts", msg: "🙂", time: "18:59" },
  { name: "Pete Jackson", msg: "Happy to hear that!", time: "11:13" },
  { name: "Elle Johnson", msg: "See you there", time: "02:53" },
];

export default function ChatList() {
  return (
    <div className="w-80 bg-[#f8fafc] border-r p-4">

      {/* Search */}
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 rounded-lg bg-white mb-4 outline-none"
      />

      {/* Chat Items */}
      <div className="space-y-3">
        {chats.map((chat, i) => (
          <div
            key={i}
            className="flex items-center gap-3 p-2 hover:bg-gray-200 rounded-lg cursor-pointer"
          >
            <img
              src={`https://i.pravatar.cc/150?img=${i + 10}`}
              className="w-10 h-10 rounded-full"
            />

            <div className="flex-1">
              <h4 className="text-sm font-semibold">{chat.name}</h4>
              <p className="text-xs text-gray-500">{chat.msg}</p>
            </div>

            <span className="text-xs text-gray-400">{chat.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
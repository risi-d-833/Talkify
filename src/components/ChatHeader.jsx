export default function ChatHeader() {
  return (
    <div className="bg-white p-4 flex justify-between items-center shadow">

      <div className="flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/40"
          className="rounded-full"
        />
        <div>
          <h3 className="font-semibold">Zoe Roberts</h3>
          <p className="text-xs text-gray-400">Last seen 19:00</p>
        </div>
      </div>

      <div className="flex gap-4 text-gray-500 text-lg">
        <span>⭐</span>
        <span>📞</span>
        <span>🎥</span>
      </div>
    </div>
  );
}
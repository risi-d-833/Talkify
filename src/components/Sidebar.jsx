export default function Sidebar() {
  return (
    <div className="w-20 bg-white flex flex-col items-center py-6 shadow-md">
      
      {/* Profile */}
      <img
        src="https://i.pravatar.cc/40"
        className="rounded-full mb-8"
      />

      {/* Icons */}
      <div className="flex flex-col gap-8 text-gray-500 text-xl">
        <span className="cursor-pointer hover:text-blue-500">💬</span>
        <span className="cursor-pointer hover:text-blue-500">📞</span>
        <span className="cursor-pointer hover:text-blue-500">⚙️</span>
      </div>
    </div>
  );
}
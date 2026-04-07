export default function Sidebar() {
  return (
    <div className="w-72 bg-black p-4 border-r border-gray-800 hidden md:block">
      <h1 className="text-indigo-500 text-xl mb-4">ChatX</h1>
      <div className="space-y-2">
        {[1,2,3].map((i) => (
          <div key={i} className="p-3 hover:bg-indigo-600 rounded cursor-pointer">
            User {i}
          </div>
        ))}
      </div>
    </div>
  );
}
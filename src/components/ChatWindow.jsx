import { useState } from "react";

export default function ChatWindow() {
  const [msg, setMsg] = useState("");

  return (
    <div className="flex flex-col flex-1">

      <div className="p-4 border-b border-gray-800">
        Chat
      </div>

      <div className="flex-1 p-4 space-y-2 overflow-y-auto">
        <div className="bg-indigo-600 p-2 rounded w-fit">Hello</div>
        <div className="bg-gray-700 p-2 rounded w-fit ml-auto">Hi</div>
      </div>

      <div className="p-4 flex gap-2">
        <input
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          className="flex-1 p-2 bg-black rounded"
        />
        <button className="bg-indigo-600 px-4 rounded">Send</button>
      </div>

    </div>
  );
}
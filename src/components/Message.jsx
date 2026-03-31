export default function Message({ text, isOwn }) {
  return (
    <div
      className={`max-w-xs px-4 py-2 rounded-2xl text-sm ${
        isOwn
          ? "bg-blue-500 text-white ml-auto"
          : "bg-white text-gray-700"
      }`}
    >
      {text}
    </div>
  );
}
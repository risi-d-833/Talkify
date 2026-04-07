import { useState } from "react";
import API from "../api/axios";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/register", form);
      navigate("/login");
    } catch (err) {
      alert("Register failed");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#020617]">
      <form className="bg-[#0f172a] p-8 rounded-xl w-96 space-y-4" onSubmit={handleSubmit}>
        <h2 className="text-white text-2xl text-center">Register</h2>

        <input
          placeholder="Name"
          className="w-full p-2 bg-black text-white rounded"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Email"
          className="w-full p-2 bg-black text-white rounded"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 bg-black text-white rounded"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="w-full bg-indigo-600 p-2 rounded hover:bg-indigo-700">
          Register
        </button>

        <p className="text-gray-400 text-sm">
          Already have account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}
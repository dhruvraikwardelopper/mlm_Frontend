import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import BASE_URL from "../api";

function MemberPage() {
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  // 🔹 Load logged-in user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      console.warn("❌ No user found in localStorage");
      window.location.href = "/login";
      return;
    }

    try {
      const parsed = JSON.parse(storedUser);
      console.log("✅ Loaded user from localStorage:", parsed);
      setUser(parsed);
    } catch (err) {
      console.error("⚠️ Error parsing stored user:", err);
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
  }, []);

  // 🔹 Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🧩 Check user before proceeding
    const storedUser = localStorage.getItem("user");
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;

    if (!parsedUser || !parsedUser._id) {
      setMessage("User not loaded yet. Please refresh and try again.");
      return;
    }

    console.log("🟣 User in handleSubmit:", parsedUser);
    console.log("🟣 loginUserId sending:", parsedUser._id);

    if (!form.name || !form.email || !form.phone || !form.password) {
      setMessage("All fields are required!");
      return;
    }

    try {
      const res = await fetch(`${BASE_URL}/api/member/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, loginUserId: parsedUser._id }),
      });

      const data = await res.json();
      console.log("Add member response:", data);

      if (!res.ok) {
        setMessage(data.message || "Server Error");
        return;
      }

      // ✅ Success
      setMessage(data.message || "Member added successfully!");
      setForm({ name: "", email: "", phone: "", password: "" });

      // ✅ Update frontend user (locally)
      const updatedUser = {
        ...parsedUser,
        membersCount: (parsedUser.membersCount || 0) + 1,
        earnings: (parsedUser.earnings || 0) + 500,
      };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));

    } catch (err) {
      console.error("❌ Submit error:", err);
      setMessage("Unable to connect to server. Check if backend is running!");
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Add New Member</h1>

        {user && <p className="mb-4">Logged in as: {user.name}</p>}
        {message && <p className="mb-4 text-red-600">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Add Member
          </button>
        </form>
      </div>
    </div>
  );
}

export default MemberPage;

import React, { useState, useEffect } from "react";

function NavbarDashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // 🔹 1️⃣: LocalStorage se user nikal lo
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));

    // 🔹 2️⃣: Agar login hone ke baad user badalta hai to update ho jaaye
    const handleUserChange = (e) => {
      console.log("🟢 User Changed:", e.detail);
      setUser(e.detail);
    };

    window.addEventListener("userChanged", handleUserChange);

    // 🔹 3️⃣: Cleanup (jab component unmount ho)
    return () => window.removeEventListener("userChanged", handleUserChange);
  }, []);

  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <h2 className="text-xl font-semibold text-gray-700">Live Tracking</h2>
      <div className="flex items-center space-x-3">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="user"
          className="w-8 h-8 rounded-full"
        />
        <span className="text-gray-700 font-medium">
          {user ? user.name || user.email : "Guest"}
        </span>
      </div>
    </div>
  );
}

export default NavbarDashboard;

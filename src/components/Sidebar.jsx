import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LayoutDashboard, Users, DollarSign, LogOut, Settings, Menu, X, Home } from "lucide-react";

function Sidebar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  const menuItems = [
    { name: "Home", icon: <Home size={20} />, path: "/" },
    { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/dashboard" },

    { name: "Members", icon: <Users size={20} />, path: "/member" },

    { name: "Earnings", icon: <DollarSign size={20} />, path: "/earnings" },
    { name: "Settings", icon: <Settings size={20} />, path: "/settings" }
  ];

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className={`${open ? "w-60" : "w-16"} bg-cyan-600 text-white min-h-screen flex flex-col transition-all duration-300`}>
      <div className="flex justify-between items-center px-4 py-3 border-b border-indigo-500">
        <h1 className={`font-bold text-lg ${!open && "hidden"}`}>MLM Panel</h1>
        <button onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
      </div>

      <div className="flex-1 mt-4 space-y-2">
        {menuItems.map((item, idx) => (
          <button key={idx} onClick={() => navigate(item.path)} className="flex items-center gap-3 w-full px-4 py-2 hover:bg-indigo-600 transition">
            {item.icon} {open && <span>{item.name}</span>}
          </button>
        ))}
      </div>

      <div className="border-t border-indigo-500 pb-4">
        <button onClick={handleLogout} className="flex items-center bg-red-600 rounded-[3px] w-full px-2 py-2 hover:bg-red-700 hover:ps-5 transition">
          <LogOut size={20} /> {open && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
}

export default Sidebar;

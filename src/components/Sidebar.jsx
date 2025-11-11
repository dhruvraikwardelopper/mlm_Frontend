import React from "react";
import { Link } from "react-router-dom";
import { Home, Activity, Users, LogOut } from "lucide-react";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-blue-700 text-white flex flex-col fixed">
      <h1 className="text-2xl font-bold text-center py-6 border-b border-blue-500">
        MLM Dashboard
      </h1>
      <nav className="flex-1 p-4">
        <ul className="space-y-4">
          <li>
            <Link to="/" className="flex items-center space-x-3 hover:text-yellow-300">
              <Home size={20} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="flex items-center space-x-3 hover:text-yellow-300">
              <Activity size={20} />
              <span>Live Tracking</span>
            </Link>
          </li>
          <li>
            <Link to="/users" className="flex items-center space-x-3 hover:text-yellow-300">
              <Users size={20} />
              <span>Team Members</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4 border-t border-blue-500">
        <button className="flex items-center space-x-3 hover:text-yellow-300">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;

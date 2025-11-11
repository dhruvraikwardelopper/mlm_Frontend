import React from "react";

function NavbarDashboard() {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <h2 className="text-xl font-semibold text-gray-700">Live Tracking</h2>
      <div className="flex items-center space-x-3">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="user"
          className="w-8 h-8 rounded-full"
        />
        <span className="text-gray-700 font-medium">Admin</span>
      </div>
    </div>
  );
}

export default NavbarDashboard;

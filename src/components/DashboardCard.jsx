import React from "react";

function Dashboardcard({ title, value }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">
      <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
      <p className="text-2xl font-bold text-indigo-400 mt-2">{value}</p>
      
    </div>
  );
}

export default Dashboardcard;

import React from "react";

function DashboardCard({ title, value, color }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-5 border border-gray-100">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className={`text-3xl font-bold ${color}`}>{value}</p>
    </div>
  );
}

export default DashboardCard;

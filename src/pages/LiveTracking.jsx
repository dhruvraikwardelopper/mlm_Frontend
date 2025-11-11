import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import NavbarDashboard from "../components/NavbarDashboard";
import DashboardCard from "../components/DashboardCard";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function LiveTracking() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => {
        const next = [
          ...prev,
          {
            time: new Date().toLocaleTimeString(),
            value: Math.floor(Math.random() * 100),
          },
        ].slice(-10);
        return next;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 ml-64 min-h-screen bg-gray-100">
        <NavbarDashboard />

        <div className="p-6 space-y-6">
          {/* Dashboard cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <DashboardCard title="Active Users" value="128" color="text-green-600" />
            <DashboardCard title="New Signups" value="45" color="text-blue-600" />
            <DashboardCard title="Total Earnings" value="$1,240" color="text-purple-600" />
          </div>

          {/* Live tracking chart */}
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Real-time Activity
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#2563eb"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveTracking;

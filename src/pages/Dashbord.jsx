import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";
import BASE_URL from "../api";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DashboardPage = () => {
  const [user, setUser] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      fetchEarnings(storedUser._id);
    }
  }, []);

  // ✅ Fetch Earnings and group by date
  const fetchEarnings = async (userId) => {
    try {
      const res = await fetch(`${BASE_URL}/api/dashboard/earnings/${userId}`);
      const data = await res.json();

      // 🧮 Group earnings by date
      const grouped = data.reduce((acc, item) => {
        const date = new Date(item.date).toLocaleDateString("en-IN", {
          year: "numeric",
          month: "short",
          day: "2-digit",
        });

        if (!acc[date]) acc[date] = 0;
        acc[date] += item.amount;
        return acc;
      }, {});

      // 🗓 Convert grouped object to array and take last 10 days
      const formatted = Object.entries(grouped)
        .map(([day, income]) => ({ day, income }))
        .slice(-10);

      setChartData(formatted);
    } catch (error) {
      console.error("Error fetching earnings:", error);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  const getRank = (earning) => {
    if (earning >= 5000) return { label: "🥇 Gold", color: "text-yellow-500" };
    if (earning >= 2000) return { label: "🥈 Silver", color: "text-gray-400" };
    return { label: "🥉 Bronze", color: "text-orange-400" };
  };

  if (!user) return <div className="text-center mt-20">Loading...</div>;
  const rank = getRank(user.earnings);

  return (
    <div className="flex min-h-screen bg-blue-300/20">
      <Sidebar />

      <div className="flex-1 p-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-6 rounded-2xl shadow-md flex justify-between items-center"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome, <span className="text-blue-600">{user.name}</span> 👋
            </h1>
            <p className="text-gray-600 mt-1">
              Here’s your last 10 days total income summary
            </p>
          </div>

          <div className="text-right">
            <p className="text-2xl font-semibold text-green-600">
              ₹{user.earnings.toLocaleString()}
            </p>
            <p className="text-sm text-gray-500">Total Earnings</p>

            <p className="text-xl font-semibold text-[#4f97ad] mt-2">
              {user.membersCount}
            </p>
            <p className="text-sm text-gray-500">Total Members</p>
          </div>
        </motion.div>

        {/* Chart Section */}
        <div className="mt-8 bg-white rounded-2xl p-6 shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Last 10 Days Total Income
          </h2>

          {chartData.length === 0 ? (
            <p className="text-center text-gray-500">No earnings data available</p>
          ) : (
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="income"
                  stroke="#2563eb"
                  strokeWidth={3}
                  dot={{ r: 5, fill: "#4f97ad" }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>

        {/* Profile Card */}
        <div
          onClick={() => setShowProfile(true)}
          className="mt-8 p-6 bg-white rounded-2xl shadow-sm cursor-pointer hover:shadow-md transition"
        >
          <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-gray-600">Total Earnings: <span className="text-green-500 font-bold">₹{user.earnings}</span></p>
          <p className="text-gray-600">Total Members:<span className="text-red-500 font-extrabold"> {user.membersCount}👥</span></p>
        </div>

        {/* Profile Popup */}
        {showProfile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-blue-300/30 bg-opacity-100 flex justify-center items-center"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="bg-gray-300 rounded-2xl p-8 shadow-lg relative w-[400px]"
            >
              <button
                onClick={() => setShowProfile(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>

              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-3xl font-bold text-blue-600 mb-3">
                  {user.name?.charAt(0)}
                </div>
                <h2 className="text-2xl font-semibold">{user.name}</h2>
                <p className="text-gray-500">{user.email}</p>
                <span className={`text-sm mt-1 ${rank.color}`}>{rank.label}</span>

                <div className="mt-4 text-gray-700 space-y-1">
                  <p>📆 Joined: {new Date().toLocaleDateString()}</p>
                  <p>💰 Earnings: ₹{user.earnings}</p>
                  <p>👥 Members: {user.membersCount}</p>
                </div>

                <button
                  onClick={handleLogout}
                  className="mt-6 bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;

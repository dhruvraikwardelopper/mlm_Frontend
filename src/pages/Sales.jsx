import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

function Sales() {
  const [user, setUser] = useState(null);
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser) {
      setUser(loggedInUser);

      // Fake sales data, replace with API
      setSalesData([
        { id: 1, product: "Product A", amount: 500, commission: 50, soldBy: "You", date: "2025-11-10" },
        { id: 2, product: "Product B", amount: 300, commission: 30, soldBy: "Downline 1", date: "2025-11-11" },
        { id: 3, product: "Product C", amount: 700, commission: 70, soldBy: "Downline 2", date: "2025-11-12" },
      ]);
    }
  }, []);

  if (!user) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-xl">Please login to view your sales.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-6xl mx-auto py-10 px-5">
        <h1 className="text-3xl font-bold mb-5">
          Welcome, {user.name} – Your Sales
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="py-3 px-6 text-left">#</th>
                <th className="py-3 px-6 text-left">Product</th>
                <th className="py-3 px-6 text-left">Amount</th>
                <th className="py-3 px-6 text-left">Commission</th>
                <th className="py-3 px-6 text-left">Sold By</th>
                <th className="py-3 px-6 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {salesData.map((sale) => (
                <tr key={sale.id} className="border-b hover:bg-gray-100">
                  <td className="py-3 px-6">{sale.id}</td>
                  <td className="py-3 px-6">{sale.product}</td>
                  <td className="py-3 px-6">${sale.amount}</td>
                  <td className="py-3 px-6">${sale.commission}</td>
                  <td className="py-3 px-6">{sale.soldBy}</td>
                  <td className="py-3 px-6">{sale.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Sales;

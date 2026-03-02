

import React, { useState, useEffect } from "react";
import BASE_URL from "../api";

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    sponsorId: "",
  });

  // Get referralId from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const refId = params.get("referral");
    if (refId) setFormData(prev => ({ ...prev, sponsorId: refId }));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`https://mlm-backend-1-0ypb.onrender.com/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        alert("✅ Registered Successfully!");
        console.log(data);
      } else {
        alert("❌ " + data.message);
      }
    } catch (err) {
      alert("⚠️ Error connecting to server");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">MLM Registration</h2>

        <form onSubmit={handleRegister} className="space-y-4">
          {["name","email","phone","password","sponsorId"].map(field => (
            <div key={field}>
              <label className="block text-sm font-medium mb-1">{field.charAt(0).toUpperCase()+field.slice(1)}</label>
              <input
                type={field==="password"?"password":"text"}
                name={field}
                placeholder={`Enter your ${field}`}
                value={formData[field]}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required={field!=="sponsorId"}
              />
            </div>
          ))}
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold">
            Register
          </button>
          <h1>For Login <a href="/login" className="text-blue-600">Click here ?</a></h1>
        </form>
      </div>
    </div>
  );
}

export default Registration;

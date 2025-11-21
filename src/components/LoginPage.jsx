import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../api";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      setLoading(false);

      if (!res.ok) {
        // backend message shown to user
        alert(data.message || "Login failed");
        return;
      } else {
        localStorage.setItem("token", data.token);

        // ✅ Always normalize user structure before saving
        const normalizedUser = {
          ...data.user,
          _id:
            data.user._id ||
            data.user.id ||
            data.user?._id ||
            data.user?._doc?._id,
        };

        // ✅ Debug check
        console.log("🔹 Normalized user before saving:", normalizedUser);

        localStorage.setItem("user", JSON.stringify(normalizedUser));

        // ✅ Fire event so other pages (like dashboard) get latest user
        window.dispatchEvent(
          new CustomEvent("userChanged", { detail: normalizedUser })
        );

        // alert("✅ Login Successful!");
        navigate("/dashboard");

        alert("✅ Login Successful!");
      }

      // navigate to dashboard
      navigate("/dashboard");
    } catch (err) {
      setLoading(false);
      console.error("Login error:", err);
      alert("Server not responding. Check backend and CORS.");
    }
  };

  return (
    <div className="h-screen w-screen font-serif flex items-center justify-start">
      <div className="w-[50%] h-full flex flex-col justify-center items-center bg-zinc-200">
        <div className="flex-col w-[50%] text-center">
          <h1 className="text-4xl">Hello,</h1>
          <h1 className="text-5xl">Welcome Back</h1>
          <p>Hey, Welcome back to your place</p>
        </div>

        <div className="w-[30vw] h-[60vh] p-7 rounded-2xl bg-white shadow-sm">
          <div className="flex justify-center text-2xl">
            <h1 className="text-2xl ps-1 text-black text-center">Sign In</h1>
          </div>

          <form onSubmit={handleLogin} className="mt-4">
            <div className="flex items-center mb-3">
              <label htmlFor="user" className="mr-3">
                <img src="./profile.gif" className="w-[46px]" alt="profile" />
              </label>
              <input
                id="user"
                type="email"
                placeholder="Enter your Email"
                className="w-full p-2 bg-gray-100 rounded outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="username"
                required
              />
            </div>

            <div className="flex items-center mb-3">
              <label htmlFor="password" className="mr-3">
                <img src="./key.gif" className="w-[46px]" alt="key" />
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="w-full p-2 bg-gray-100 rounded outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full p-2 my-3 text-white rounded ${
                loading ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {loading ? "Signing in..." : "Sign In (Login)"}
            </button>
          </form>

          <div className="text-center text-gray-500 mt-3">
            <a href="*" className="text-blue-500 underline">
              Forgot password?
            </a>
            <div className="mt-2">
              New User?{" "}
              <a href="/register" className="text-blue-500 underline">
                Register here
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[50%] h-full">
        <img
          className="h-full w-full object-cover rounded-4xl p-2"
          src="./login.webp"
          alt="login-illustration"
        />
      </div>
    </div>
  );
};

export default LoginPage;

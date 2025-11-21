// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <>
//       <motion.div
//         initial={{ opacity: 0, y: -60 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="bg-slate-800/40  flex p-5 fixed w-full justify-center items-center backdrop-blur-md"
//       >
//         <div id="logo" className=" w-[20%] flex justify-center">
//           <h1 className="text-4xl text-[#FFFFFF]">MLM project</h1>
//         </div>
//         <div className="w-[55%] flex items-center justify-evenly  text-[#FFFFFF]">
//           <a className="hover:text-[#60A5FA]" href="#home">
//             Home
//           </a>
//           <Link to="/dashboard">
//             <a className="hover:text-[#60A5FA]" href="#about">
//               Dashboard
//             </a>
//           </Link>
//           <a className="hover:text-[#60A5FA]" href="#sales">
//             Sales
//           </a>
//           <a className="hover:text-[#60A5FA]" href="#Report">
//             Reports
//           </a>
//           <Link to="/contactus">
//             <a className="hover:text-[#60A5FA]" href="#contact">
//               Contact
//             </a>
//           </Link>
//         </div>
//         <div className="w-[25%] flex justify-evenly items-center ">
//           <Link to="/login">
//             <button className="bg-blue-500 hover:hover:bg-blue-600 text-white px-10 py-2 rounded-md">
//               Login
//             </button>
//           </Link>
//           <Link to="/register">
//             <button className="bg-blue-500 hover:hover:bg-blue-600 text-white px-10 py-2 rounded-md">
//               Register
//             </button>
//           </Link>
//         </div>
//       </motion.div>
//     </>
//   );
// }
// export default Navbar;



// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// function Navbar() {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // check user from localStorage
//     const storedUser = localStorage.getItem("user");
//     setLoggedIn(!!storedUser);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     setLoggedIn(false);
//     navigate("/login");
//   };

//   return (
//     <nav className="navbar bg-blue-600 text-white flex justify-between items-center px-6 py-4 shadow-md">
//       <div className="text-2xl font-bold">
//         <Link to="/">MyMLM</Link>
//       </div>

//       <div className="flex items-center space-x-5">
//         <Link to="/" className="hover:text-gray-200 transition">
//           Home
//         </Link>
//         <Link to="/about" className="hover:text-gray-200 transition">
//           About
//         </Link>
//         <Link to="/contact" className="hover:text-gray-200 transition">
//           Contact
//         </Link>

//         {/* 🔹 Register button hide when logged in */}
//         {!loggedIn && (
//           <Link
//             to="/register"
//             className="bg-white text-blue-700 px-4 py-2 rounded hover:bg-gray-200 transition"
//           >
//             Register
//           </Link>
//         )}

//         {/* 🔹 Toggle Login/Logout */}
//         {loggedIn ? (
//           <button
//             onClick={handleLogout}
//             className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition"
//           >
//             Logout
//           </button>
//         ) : (
//           <Link
//             to="/login"
//             className="bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition"
//           >
//             Login
//           </Link>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;





import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState(null); // null means not logged in
  const navigate = useNavigate();

  // Ye effect check karega agar user login hai ya nahi
  useEffect(() => {
    // Assume ki localStorage me user info save hai login ke baad
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user"); // remove user data
    setUser(null); // update state
    navigate("/login"); // redirect to login page
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-slate-800/40 flex p-5 justify-center items-center backdrop-blur-md fixed top-0 left-0 w-full  shadow-md z-[9999]"
      >
        <div id="logo" className="w-[20%] flex justify-center">
          <h1 className="text-4xl text-[#FFFFFF]">MLM project</h1>
        </div>

        <div className="w-[55%] flex items-center justify-evenly text-[#FFFFFF]">
         <Link to="/home">
          <a className="hover:text-[#60A5FA]" href="#home">Home</a>
         </Link>
          <Link to="/dashboard">
            <span className="hover:text-[#60A5FA] cursor-pointer">Dashboard</span>
          </Link>
          <a className="hover:text-[#60A5FA]" href="*">Sales</a>
          <a className="hover:text-[#60A5FA]" href="*">Reports</a>
          <Link to="/contactus">
            <span className="hover:text-[#60A5FA] cursor-pointer">Contact</span>
          </Link>

           <Link to="/product">
            <span className="hover:text-[#60A5FA] cursor-pointer">Product</span>
          </Link>
        </div>

        <div className="w-[25%] flex justify-evenly items-center">
          {user ? (
            <>
              <span className="text-white px-4 py-2">Hi, {user.name}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-10 py-2 rounded-md"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-2 rounded-md">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-2 rounded-md">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default Navbar;

import React from "react";
import image from "../image/pic.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="w-full h-screen ">
      <img className="h-full w-full object-cover" src={image} alt="" />
      <div className="absolute top-50 left-0 w-[50%] h-[50%] flex flex-col text-white justify-center bg-blue-200/10 rounded-4xl items-center  px-10 ">
        <motion.h1 
        initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }} className="text-4xl font-bold mb-5">
          Track Your Sales & Commissions in Real-Time
        </motion.h1>
        <motion.p initial={{opacity:0,y:60}}
        animate={{ opacity:1, y:0}}
        transition={{ duration:1 }}
         className="text-lg mb-5">
          Join our MLM Management System and simplify your business operations
          with automated sales, downline tracking, and commission reports.
        </motion.p>
        <motion.div 
        initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 1 }}
         className="flex justify-center gap-6 ">
          <Link to="/register">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
            Register Now
          </button></Link>
          
          <Link to="/login">
          <button className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
            Login
          </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
export default Home;
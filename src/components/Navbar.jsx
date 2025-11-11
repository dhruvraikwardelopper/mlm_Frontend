import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-slate-800/40  flex p-5 fixed w-full justify-center items-center backdrop-blur-md"
      >
        <div id="logo" className=" w-[20%] flex justify-center">
          <h1 className="text-4xl text-[#FFFFFF]">MLM project</h1>
        </div>
        <div className="w-[55%] flex items-center justify-evenly  text-[#FFFFFF]">
          <a className="hover:text-[#60A5FA]" href="#home">
            Home
          </a>
          <Link to="/dashboard">
            <a className="hover:text-[#60A5FA]" href="#about">
              Dashboard
            </a>
          </Link>
          <a className="hover:text-[#60A5FA]" href="#sales">
            Sales
          </a>
          <a className="hover:text-[#60A5FA]" href="#Report">
            Reports
          </a>
          <Link to="/contactus">
            <a className="hover:text-[#60A5FA]" href="#contact">
              Contact
            </a>
          </Link>
        </div>
        <div className="w-[25%] flex justify-evenly items-center ">
          <Link to="/login">
            <button className="bg-blue-500 hover:hover:bg-blue-600 text-white px-10 py-2 rounded-md">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="bg-blue-500 hover:hover:bg-blue-600 text-white px-10 py-2 rounded-md">
              Register
            </button>
          </Link>
        </div>
      </motion.div>
    </>
  );
}
export default Navbar;

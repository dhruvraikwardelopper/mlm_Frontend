import React from "react";
import Home from "./Home";


const LoginPage = () => {
  return (
    <div className="h-screen w-screen font-serif flex items-center justify-start ">
      <div className="w-[50%] h-full flex flex-col justify-center items-center bg-zinc-200">
        <div className=" flex-col  w-[50%]">
          <h1 className="text-4xl">Hello,</h1>
        <h1 className="text-5xl">Welcome Back</h1>
        <p>Hey, Welcome back to your place</p>
        </div>
        <div className=" w-[30vw] h-[60vh]  p-7 rounded-2xl">
        <div className="flex justify-center text-2xl ">
          <h1 className="text-2xl ps-1 text-black text-center">
            SignUp/Login
          </h1>
        </div>
        <div className="flex items-center">
          <label htmlFor="user">
            <img src="./profile.gif" className="w-[46px] " />
          </label>
          <input
            type="email"
            id="user"
            placeholder="Enter your Email or Username "
            className="w-full p-2 my-5 bg-white outline-0"
          />
        </div>

        <div className="flex items-center">
          <label htmlFor="password">
            <img src="./key.gif" className="w-[46px] " />
          </label>
          <input
            type="password"
            placeholder="Password "
            className="w-full p-2 my-5 bg-white outline-0"
          />
        </div>

        <button
          type="submit"
          className="w-full p-1.5 my-3 bg-blue-500 text-[#fff] hover:bg-blue-600 "
        >
          Sign In(Login)
        </button>

        <h1 className="text-gray-500">
          If{" "}
          <a href="#forget.jsx" className="text-blue-500 underline my-5 hover:cursor-pointer">
            forget password
          </a>{" "}
          ?
        </h1>
        <h1 className="text-gray-500">
          New User{" "}
          <a href="/register" className="text-blue-500 underline my-5 hover:cursor-pointer">
            Register
          </a>
          {" "}
          here .
        </h1>
      </div>
      </div>
      <div className="w-[50%] h-full">
        <img className="h-full w-full object-cover rounded-4xl p-2" src="./login.webp" alt="" />
      </div>
    </div>
  );
};

export default LoginPage;

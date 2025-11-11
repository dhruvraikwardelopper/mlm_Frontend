import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import MainSlider from "./components/MainSlider";
import MainFooter from "./components/MainFooter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Registration from "./pages/Registration";
import LiveTracking from "./pages/LiveTracking";
import Contactus from "./pages/Contactus";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🏠 Home Page */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Features />
              <MainSlider />
              <MainFooter />
            </>
          }
        />

        {/* 🔑 Login Page */}
        <Route path="/login" element={<LoginPage />} />

        {/* 📝 Registration Page */}
        <Route path="/register" element={<Registration/>} />
        <Route path="/dashboard" element={<LiveTracking />} />
        <Route path="/contactus" element={<Contactus />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;

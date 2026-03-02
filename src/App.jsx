import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import MainSlider from "./components/MainSlider";
import MainFooter from "./components/MainFooter";
import LoginPage from "./components/LoginPage";
import Registration from "./pages/Registration";
import Contactus from "./pages/Contactus";
import Dashboard from "./pages/Dashbord";
import ProtectedRoute from "./components/ProtectedRoute"; // ✅ add this line
import MemberPage from "./pages/MemberPage";
import Sales from "./pages/Sales";
import Product from "./pages/Product";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <HashRouter>
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
        <Route
          path="/home"
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
        <Route path="/product" element={<Product />} />

        {/* 📝 Registration Page */}
          <Route path="/member" element={<MemberPage />} />
        <Route path="/register" element={<Registration />} />

        {/* 📞 Contact Us Page */}
        <Route path="/contactus" element={<Contactus />} />
     
        {/* 🧭 Protected Dashboard Route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* 🔁 Default fallback (agar koi unknown route ho) */}
        {/* <Route path="login" element={<LoginPage />} /> */}
           <Route path="*" element={<ErrorPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

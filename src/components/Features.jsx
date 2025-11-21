import React from "react";
 import { FaUsers, FaChartLine, FaShieldAlt, FaFileAlt, FaNetworkWired, FaHeadset } from "react-icons/fa";

function Features() {
  const features = [
    { icon: <FaUsers className="h-15 w-20  text-white" size={40} />, title: "Easy Member Registration", desc: "Quickly join and manage your MLM account." },
    { icon: <FaChartLine className="h-15 w-20  text-white" size={40} />, title: "Real-time Commission Tracking", desc: "Monitor commissions and bonuses instantly." },
    { icon: <FaShieldAlt className="h-15 w-20  text-white" size={40} />, title: "Secure Payments", desc: "Safe and transparent transactions." },
    { icon: <FaFileAlt className="h-15 w-20  text-white" size={40} />, title: "Analytics & Reports", desc: "Visual charts and performance tracking." },
    { icon: <FaNetworkWired className="h-15 w-20  text-white" size={40} />, title: "Multi-Level Network View", desc: "Track downline growth and structure easily." },
    { icon: <FaHeadset className="h-15 w-20  text-white" size={40} />, title: "24×7 Support", desc: "Get help anytime from our dedicated support team." },
  ];
  return (
    <div className="w-full  bg-white p-5">
        <h2 className="text-4xl font-bold mb-12 text-gray-800 text-center">Our Key Features</h2>
        <div className="flex gap-5 justify-center flex-wrap  p-10">
         {features.map((feature, index) => (
            <div className="w-[30%] p-4 bg-blue-300/20 flex justify-center items-center rounded-2xl">
               <div className="m-4 h-20 w-20 bg-[#79bed1] color-white rounded-full flex justify-center items-center">{feature.icon}</div>
               <div className="">
                <h5 className="text-[2vw]">{feature.title}</h5>
                <p>{feature.desc}</p>
               </div>
            </div>
         ))}
        </div>
           
    </div>
  )
}
export default Features;
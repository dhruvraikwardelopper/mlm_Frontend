import React from "react";

const Contactus = () => {
  return (
    <div className="min-h-screen bg-blue-300/20 flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="max-w-3xl text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Contact <span className="text-indigo-600">Us</span>
        </h1>
        <p className="text-gray-600">
          Have questions about joining our MLM community? We’re here to help you grow and succeed.
        </p>
      </div>

      {/* Contact Form + Info */}
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Contact Form */}
        <div className="p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                placeholder="Inquiry about MLM plan"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#368ba0] text-white font-semibold py-2 rounded-lg hover:bg-[#02687c] transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="bg-[#368ba0] text-white p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-6 text-indigo-100">
            Reach out to our support team for partnership opportunities, business inquiries, or
            help with your MLM dashboard.
          </p>

          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="mr-3 text-2xl">📞</span>
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center">
              <span className="mr-3 text-2xl">📧</span>
              <span>mlm@supportgmail.com</span>
            </li>
            <li className="flex items-center">
              <span className="mr-3 text-2xl">📍</span>
              <span>123 Growth Ave, Business City, USA</span>
            </li>
          </ul>

          <div className="mt-8 flex space-x-4">
            <a href="#" className="text-indigo-200 hover:text-white text-xl">🌐</a>
            <a href="#" className="text-indigo-200 hover:text-white text-xl">📘</a>
            <a href="#" className="text-indigo-200 hover:text-white text-xl">🐦</a>
            <a href="#" className="text-indigo-200 hover:text-white text-xl">📸</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
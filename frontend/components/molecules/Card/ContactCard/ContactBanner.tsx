import React from "react";
import { FiInstagram, FiMail } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { TfiLinkedin } from "react-icons/tfi";
import GradientButton from "../../../atoms/GradientButton/GradientButton";

const ContactUs = () => {
  return (
    <div className="w-full max-w-6xl mx-auto my-10 px-6 md:px-12 py-8 md:py-16 rounded-2xl bg-gradient-to-r from-[#6a1d1b] to-[#340a0a] shadow-xl">
      {/* Heading */}
      <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 text-center tracking-tighter">
        Contact Us
      </h2>

      {/* Content */}
      <div className="mx-auto max-w-4xl flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        {/* Left Section: Social Icons and Info */}
        <div className="flex flex-col items-start space-y-6 w-full md:w-2/5">
          <div className="flex items-center space-x-4">
            {/* X Icon */}
            <div className="p-2 bg-white rounded-lg">
              <BsTwitterX size={25} />
            </div>
            <span className="text-white">@icphub_KE</span>
          </div>

          <div className="flex items-center space-x-4">
            {/* Instagram Icon */}
            <div className="p-2 bg-white rounded-lg">
              <FiInstagram size={25} />
            </div>
            <span className="text-white">icphub_ke</span>
          </div>

          <div className="flex items-center space-x-4">
            {/* LinkedIn Icon */}
            <div className="p-2 bg-white rounded-lg">
              <TfiLinkedin size={25} />
            </div>
            <span className="text-white">ICP Hub Kenya</span>
          </div>

          <div className="flex items-center space-x-4">
            {/* Email Icon */}
            <div className="p-2 bg-white rounded-lg">
              <FiMail size={25} />
            </div>
            <span className="text-white">info@icpkushite.com</span>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="w-full md:w-3/5 ">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded-sm bg-[#422225] border border-white text-white placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-sm bg-[#422225] border border-white text-white placeholder-gray-400"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-3 rounded-sm bg-[#422225] border border-white text-white placeholder-gray-400"
            />
            <div>
              <GradientButton
                onClick={() => console.log("Form sent successfully")}
                className="w-full"
              >
                Send
              </GradientButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

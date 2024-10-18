import React from "react";
import { FiInstagram, FiLinkedin, FiMail, FiPhoneCall } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import GradientButton from "../../../atoms/GradientButton/GradientButton";
const ContactUs = () => {
  return (
    <div className="w-full max-w-6xl mx-auto my-10 px-12  py-16 rounded-2xl bg-gradient-to-r from-[#6a1d1b] to-[#340a0a] shadow-xl r">
      {/* Left Section: Social Icons and Info */}
      <h2 className="text-white text-5xl font-bold mb-6 text-center tracking-tighter">
        Contact Us
      </h2>
      <div className="mx-auto max-w-4xl flex items-center justify-between">
        <div className="flex flex-col items-start space-y-6">
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
              <FiLinkedin size={25} />
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
        <div className=" w-3/5 p-8">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded-sm bg-[#422225] border border-white text-white placeholder-gray-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-sm  bg-[#422225] border border-white text-white placeholder-gray-500"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-3 rounded-sm bg-[#422225] border border-white text-white placeholder-gray-500"
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

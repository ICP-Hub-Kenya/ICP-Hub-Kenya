import React from "react";
import { FiInstagram, FiMail } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { TfiLinkedin } from "react-icons/tfi";
import { BiLogoTelegram } from "react-icons/bi";

const ContactUs = () => {
  return (
    <div className="w-full max-w-6xl mx-auto my-10 px-6 md:px-12 py-12 md:py-20 rounded-2xl bg-gradient-to-r from-[#6a1d1b] to-[#340a0a] shadow-xl">
      <h2 className="text-white text-3xl md:text-5xl font-bold mb-10 text-center tracking-tighter">
        Contact Us
      </h2>

      <div className="mx-auto max-w-4xl flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-8">
        {/* Twitter */}
        <a
          href="https://x.com/icphub_KE"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-4 hover:opacity-80 transition-opacity"
        >
          <div className="p-2 bg-white rounded-lg">
            <BsTwitterX size={25} />
          </div>
          <span className="text-white">@icphub_KE</span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/icphub_ke/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-4 hover:opacity-80 transition-opacity"
        >
          <div className="p-2 bg-white rounded-lg">
            <FiInstagram size={25} />
          </div>
          <span className="text-white">icphub_ke</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/company/icphub-ke/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-4 hover:opacity-80 transition-opacity"
        >
          <div className="p-2 bg-white rounded-lg">
            <TfiLinkedin size={25} />
          </div>
          <span className="text-white">ICP Hub Kenya</span>
        </a>

        {/* Email */}
        <a
          href="mailto:info@icpkushite.com"
          className="flex items-center space-x-4 hover:opacity-80 transition-opacity"
        >
          <div className="p-2 bg-white rounded-lg">
            <FiMail size={25} />
          </div>
          <span className="text-white">info@icpkushite.com</span>
        </a>

        {/* Telegram */}
        <a
          href="https://t.me/icphub_KE"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-4 hover:opacity-80 transition-opacity"
        >
          <div className="p-2 bg-white rounded-lg">
            <BiLogoTelegram size={25} />
          </div>
          <span className="text-white">ICP HUB Kenya</span>
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
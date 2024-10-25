import GradientButton from "../../atoms/GradientButton/GradientButton";

import FooterNavBrand from "../../atoms/NavBrand/FooterNavBrand";

import React from "react";
import Link from "next/link";

const Footer = () => {
  const handleTelegramRedirect = () => {
    window.open("https://t.me/icphub_KE", "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="bg-[#632020] text-white py-16 px-4 sm:px-24 flex flex-col">
      <div className="container flex flex-col space-y-5">
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between">
          <div className="flex flex-col w-full space-y-6 items-center sm:items-start text-center sm:text-left mb-12 sm:mb-0">
            <h2 className="text-5xl font-bold mb-4 tracking-tighter">
              Join The Revolution
            </h2>
            <p className="font-thin mb-8 text-base sm:text-lg lg:text-xl px-4 sm:px-0">
              ICP Hub Kenya is dedicated to providing the advancement of
              blockchain technology within our region and beyond.
            </p>
            <GradientButton onClick={handleTelegramRedirect}>
              Join ICP Hub Kenya
            </GradientButton>
          </div>
          <div className="mb-8 sm:mb-0 sm:mt-0">
            <img
              src="/images/Astronaut.png"
              alt="Astronaut"
              className="max-w-full sm:max-w-4xl h-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div className="flex flex-col items-center sm:items-start">
            <FooterNavBrand />
            <p className="text-md mt-4 text-white/60 text-center sm:text-left">
              Copyright © {new Date().getFullYear()}
            </p>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <ul className="text-white/80 text-center sm:text-left">
              <li className="mb-4">
                <a className="text-white" href="https://t.me/icphub_KE">
                  Telegram
                </a>
              </li>
              <li className="mb-4">
                <a className="text-white" href="https://twitter.com/icphub_KE">
                  Twitter
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="text-white"
                  href="https://www.instagram.com/icphub_ke/"
                >
                  Instagram
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="text-white"
                  href="https://www.linkedin.com/company/icphub-ke/"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-lg font-bold mb-4">Education</h4>
            <ul className="text-center sm:text-left">
              <li className="mb-4 text-white/80">
                <a
                  className="text-white"
                  href="https://dacade.org/communities/icp"
                >
                  Dacade Courses
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="text-white"
                  href="https://dacade.org/communities/icp"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-lg font-bold mb-4">Blog</h4>
            <ul className="space-y-2 text-center sm:text-left">
              <li className="mb-4">
                <Link href="https://icphub-ke.medium.com/" passHref>
                  Our blog posts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

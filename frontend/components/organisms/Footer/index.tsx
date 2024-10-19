import GradientButton from "../../atoms/GradientButton/GradientButton";
import NavBrand from "../../atoms/NavBrand";
import FooterNavBrand from "../../atoms/NavBrand/FooterNavBrand";
import NavLink from "../../atoms/NavLink";
import Text from "../../atoms/Text";
import React from "react";
import Link from "next/link"; // Importing Next.js Link component

const Footer = () => {

  const handleTelegramRedirect = () => {
    window.open('https://t.me/icphub_KE', '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-[#632020] text-white py-16 px-24 flex flex-col">
      <div className="container flex flex-col space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col  w-full space-y-6 items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0">
            <h2 className="text-5xl font-bold mb-4 tracking-tighter">
              Join The Revolution
            </h2>

            <p className="text-lg  max-w-sm">
              ICP Hub Kenya is dedicated to providing the advancement of
              blockchain technology within our region and beyond.
            </p>
            <GradientButton onClick={handleTelegramRedirect}>
              Join ICP Hub Kenya
            </GradientButton>
          </div>
          <div className="mt-12 lg:mt-0">
            <img
              src="/images/Astronaut.svg"
              alt="Astronaut"
              className="max-w-4xl h-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <FooterNavBrand />
            <p className="text-md mt-4 text-white/60 ">
              Copyright © {new Date().getFullYear()}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <ul className="text-white/80">
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

          <div>
            <h4 className="text-lg font-bold mb-4">Education</h4>
            <ul className="">
              <li className="mb-4 text-white/80">
                <a
                  className="text-white"
                  href="https://dacade.org/communities/icp"
                >
                  Decade Courses
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
          <div>
            <h4 className="text-lg  font-bold mb-4">Blog</h4>
            <ul className="space-y-2">
              <li className="mb-4">
                {/* Replacing the <a> tag with Next.js <Link> */}
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

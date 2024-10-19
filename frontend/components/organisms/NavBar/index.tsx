import React, { useEffect, useState } from "react";
import NavBrand from "../../atoms/NavBrand";
import NavLink from "../../atoms/NavLink";
import Container from "../../templates/Container";
import { FiMenu, FiX } from "react-icons/fi";
import useMobileDeviceDetection from "../../../hooks/useMobileDetection";
import useGetBrowserName from "../../../hooks/useGetBrowserName";
import GradientButton from "../../atoms/GradientButton/GradientButton";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLightSectionVisible, setIsLightSectionVisible] = useState(false);
  const browserName = useGetBrowserName();
  const isMobile = useMobileDeviceDetection();

  const handleTelegramRedirect = () => {
    window.open('https://t.me/icphub_KE', '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const lightSectionElement = document.querySelector("[data-light-section]");

    if (lightSectionElement) {
      const lightSectionTop = lightSectionElement.getBoundingClientRect().top;
      const lightSectionBottom = lightSectionElement.getBoundingClientRect().bottom;

      setIsLightSectionVisible(
        (lightSectionTop >= 0 && lightSectionTop <= window.innerHeight) ||
        (lightSectionBottom >= 0 && lightSectionBottom <= window.innerHeight)
      );
    }

    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    document.body.classList.toggle("h-screen", isOpen);
    document.body.classList.toggle("overflow-y-hidden", isOpen);
  }, [isOpen]);

  return (
    <nav className={`xl:px-[70px] w-full top-5 left-0 z-30 ${isScrolled ? "fixed" : "absolute"}`}>
      <Container>
        <div className="flex items-center justify-between py-4">
          <NavBrand />
          
          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink href="/about" value="About" canActive={true} />
            <NavLink href="/education" value="Education" canActive={true} />
            <NavLink href="https://lu.ma/user/usr-RgJYUVo8GJUSfXd" value="Events" canActive={true} />
            <NavLink href="https://icphub-ke.medium.com/" value="Blog" canActive={true} />
            <NavLink href="/contact" value="Contact" canActive={true} />
            <GradientButton onClick={handleTelegramRedirect}>
              <span className="px-4">Join Us</span>
            </GradientButton>
          </div>

          {/* Mobile menu icon */}
          <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <div className={`text-black text-2xl ${isMobile ? "cursor-default" : "cursor-pointer"}`}>
              <FiMenu />
            </div>
          </div>
        </div>
      </Container>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="lg:hidden fixed top-8 right-0 w-2/4 bg-white p-4 shadow-lg z-50">
          {/* Close button */}
          <div className="flex justify-end mb-4">
            <div className="text-black text-2xl cursor-pointer" onClick={() => setIsOpen(false)}>
              <FiX />
            </div>
          </div>
          {/* Menu items */}
          <div className="flex flex-col space-y-5">
            <NavLink href="/about" value="About" canActive={true} />
            <NavLink href="/education" value="Education" canActive={true} />
            <NavLink href="/events" value="Events" canActive={true} />
            <NavLink href="/blog" value="Blog" canActive={true} />
            <NavLink href="/contact" value="Contact" canActive={true} />
            <GradientButton onClick={handleTelegramRedirect}>
              <span className="px-4">Join Us</span>
            </GradientButton>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

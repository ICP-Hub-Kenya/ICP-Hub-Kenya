import React from "react";
import GradientButton from "../../../atoms/GradientButton/GradientButton";
import Image from "next/image";

const EducationBanner = () => {
  return (
    <div className="mx-auto my-20 relative overflow-hidden h-[100vh] md:h-[80vh] p-[40px_30px] bg-gradient-to-r from-[#571E1E] to-[#340A0A] rounded-[40px] shadow-xl border-[4px] border-[#400d0b] hero-section max-w-6xl flex flex-col space-y-4 items-center">
      <div className="flex flex-col items-start">
        {/* Certificate Icon */}
        <div className="flex  items-end justify-center  w-full">
          <img
            src="images/certificate.png"
            alt="Certificate Icon"
            className="w-56 "
          />
        </div>

        {/* Text Section */}
        <div className="flex items-center text-white justify-center space-x-4">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
            Be ICP Certified!
          </h1>

          {/* Gold Coin Icon */}
          <div>
            <img
              src="images/Frame.png"
              alt="Gold Coin Icon"
              className="w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
            />
          </div>
        </div>
      </div>

      <div className="space-y-10 flex flex-col items-center">
        {/* Description Text */}
        <p className="font-thin  text-center text-white text-lg md:text-xl leading-relaxed w-[80%] md:w-[56%] mx-auto">
          Enroll in our free dacade course and embark on an exciting adventure
          into the world of decentralized applications on ICP. Complete the
          course and earn a Certificate and ICP Tokens!
        </p>

        {/* Explore Button */}
        <GradientButton onClick={() => console.log("Explore")}>
          Explore the dacade Course
        </GradientButton>
      </div>
    </div>
  );
};

export default EducationBanner;

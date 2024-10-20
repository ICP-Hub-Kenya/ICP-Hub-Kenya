import useMobileDeviceDetection from "../../../hooks/useMobileDetection";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBrand = () => {
  const isMobile = useMobileDeviceDetection();
  return (
    <>
      <div
        className={`select-none ${
          isMobile ? "cursor-default" : "cursor-pointer"
        }`}
      >
        <Link href={"/"} passHref>
          <div className="w-fit h-fit">
            <Image
              src={"/images/brand3.png"}
              width={170}
              height={50}
              alt="company brand"
              loading="lazy"
            />
          </div>
        </Link>
      </div>
    </>
  );
};

export default NavBrand;

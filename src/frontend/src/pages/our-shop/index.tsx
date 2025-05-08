import React from "react";
import ShopPage from "./shop-page";
import CryptoHero from "./purchase-coins";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";


const OurShop = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ShopPage />
      <CryptoHero />
      <Footer />
    </div>
  );
};

export default OurShop;
import React from "react";
import PageTemplate from "../../components/templates/PageTemplate";
import Footer from "../../components/organisms/Footer";
import ShopPage from "./shop-page";
import CryptoHero from "./purchase-coins";

const OurShop = () => {
  return (
    <>
      <PageTemplate title="OurShop - ICPHUB KE">
        <ShopPage/> 
        <CryptoHero />
        <Footer /> 
      </PageTemplate>
    </>
  );
};

export default OurShop;
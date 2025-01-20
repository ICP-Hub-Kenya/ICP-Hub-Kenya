import React from "react";
import PageTemplate from "../../components/templates/PageTemplate";
import Footer from "../../components/organisms/Footer";
import ShopPage from "./shop-page";

const OurShop = () => {
  return (
    <>
      <PageTemplate title="OurShop - ICPHUB KE">
        <ShopPage/> 
        <Footer />
      </PageTemplate>
    </>
  );
};

export default OurShop;
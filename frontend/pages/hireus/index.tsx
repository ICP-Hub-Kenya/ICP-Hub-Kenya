import React from "react";
import PageTemplate from "../../components/templates/PageTemplate";
import Footer from "../../components/organisms/Footer";
import ContactUs from "../../components/molecules/Card/ContactCard/ContactBanner";
import HireUs from "./hireus";

const Contact = () => {
  return (
    <>
      <PageTemplate title="Contact - ICPHUB KE">
        <HireUs /> 
        <Footer />
      </PageTemplate>
    </>
  );
};

export default Contact;
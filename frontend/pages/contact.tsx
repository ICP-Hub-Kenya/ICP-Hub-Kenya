import React from "react";
import PageTemplate from "../components/templates/PageTemplate";
import Footer from "../components/organisms/Footer";
import ContactUs from "../components/molecules/Card/ContactCard/ContactBanner";

const Contact = () => {
  return (
    <>
      <PageTemplate title="Contact - ICPHUB KE">
        <ContactUs />
        <Footer />
      </PageTemplate>
    </>
  );
};

export default Contact;

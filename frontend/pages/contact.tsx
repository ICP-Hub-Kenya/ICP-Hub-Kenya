// import Button from 'components/atoms/Button'
// import InputGroup from 'components/molecules/FormGroup/InputGroup'
// import TextAreaGroup from 'components/molecules/FormGroup/TextAreaGroup'
// import IconListItem from 'components/molecules/IconListItem'
// import PageSentence from 'components/molecules/PageSentence'
// import PageTemplate from 'components/templates/PageTemplate'
import React from "react";
import {
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiPhoneCall,
  FiTwitter,
} from "react-icons/fi";
// import Footer from 'components/organisms/Footer'

import Button from "../components/atoms/Button";
import InputGroup from "../components/molecules/FormGroup/InputGroup";
import TextAreaGroup from "../components/molecules/FormGroup/TextAreaGroup";
import IconListItem from "../components/molecules/IconListItem";
import PageSentence from "../components/molecules/PageSentence";
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

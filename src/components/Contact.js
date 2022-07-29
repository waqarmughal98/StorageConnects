import React from "react";
import ContactForm from "./ContactComponents/ContactForm";
import Footer from "./layout/Footer";
import Nav from "./layout/Nav";
import TitleBanner from "./layout/TitleBanner";

const Contact = () => {
  return (
    <div>
      <Nav overlay={false} />
      <TitleBanner
        title="Contact us"
        subtitle="Let us know what we can help you with"
      />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;

import DigiBlog from "@components/blogs/DigiBlog";
import DigiContact from "@components/contact-us/DigiContact";
import NewsLetterTwo from "@components/cta/NewsLetterTwo";
import CustomerBrand from "@components/customer/CustomerBrand";
import HeroFourteen from "@components/hero-section/HeroFourteen";
import DigiIntegration from "@components/integration/DigiIntegration";
import DigiSerives from "@components/services/DigiServies";
import DigiWhyChoose from "@components/workprocess/DigiWhyChoose";
import DigiWorkProcess from "@components/workprocess/DigiWorkProcess";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import Layout from "@layout/Layout";
import React from "react";

const DigitalMarketing = () => {
  return (
    <Layout title="Digital Marketing">
      <Navbar />
      <HeroFourteen />
      <CustomerBrand />
      <DigiSerives />
      <NewsLetterTwo />
      <DigiWhyChoose />
      <DigiWorkProcess />
      <DigiIntegration />
      <DigiBlog />
      <DigiContact />
      <Footer footerGradient />
    </Layout>
  );
};

export default DigitalMarketing;

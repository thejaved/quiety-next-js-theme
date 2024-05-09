import React from "react";
import Layout from "@layout/Layout";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import Promo from "@components/promo/Promo";
import Customer from "@components/customer/Customer";
import SupportOne from "@components/support/SupportOne";
import TestimonialTwo from "@components/testimonial/TestimonialTwo";
import WorkProcessOne from "@components/workprocess/WorkProcessOne";
import IntegrationTwo from "@components/integration/IntegrationTwo";
import HeroSectionFourth from "@components/hero-section/HeroSectionFourth";
import FeatureImgContentTwo from "@components/feature-img-content/FeatureImgContentTwo";
import FeatureImgContentThree from "@components/feature-img-content/FeatureImgContentThree";

const DesktopAppHome = () => {
  return (
    <Layout>
      <Navbar />
      <HeroSectionFourth />
      <Customer />
      <Promo />
      <FeatureImgContentTwo bgWhite />
      <FeatureImgContentThree />
      <WorkProcessOne />
      <TestimonialTwo
        sectionBgClass="bg-dark"
        swiperBgClass="bg-custom-light text-white"
      />
      <IntegrationTwo />
      <SupportOne className />
      <Footer footerLight />
    </Layout>
  );
};

export default DesktopAppHome;

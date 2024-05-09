import React from "react";
import Layout from "@layout/Layout";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import Customer from "@components/customer/Customer";
import PromoThree from "@components/promo/PromoThree";
import SupportOne from "@components/support/SupportOne";
import ServiceOne from "@components/services/ServiceOne";
import IntegrationTwo from "@components/integration/IntegrationTwo";
import TestimonialTwo from "@components/testimonial/TestimonialTwo";
import WorkProcessFour from "@components/workprocess/WorkProcessFour";
import HeroSectionFourth from "@components/hero-section/HeroSectionFourth";
import SingleServiceFeature from "@components/services/SingleServiceFeature";
import FeatureImgContentTwo from "@components/feature-img-content/FeatureImgContentTwo";

const StartUpAgencyHome = () => {
  return (
    <Layout>
      <Navbar navDark />
      <HeroSectionFourth bgDark />
      <Customer gray />
      <PromoThree />
      <FeatureImgContentTwo cardDark />
      <SingleServiceFeature />
      <ServiceOne bgDark />
      <WorkProcessFour />
      <IntegrationTwo />
      <TestimonialTwo sectionBgClass="bg-white" swiperBgClass="bg-white" />
      <SupportOne className />
      <Footer footerLight />
    </Layout>
  );
};

export default StartUpAgencyHome;

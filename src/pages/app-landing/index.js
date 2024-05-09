import React from "react";
import Layout from "@layout/Layout";
import Navbar from "@layout/Header/Navbar";
import Footer from "@layout/Footer/Footer";
import FaqThree from "@components/faq/FaqThree";
import PriceTwo from "@components/pricing/PriceTwo";
import FeatureFour from "@components/features/FeatureFour";
import QuickSupport from "@components/support/QuickSupport";
import FeatureImgFive from "@components/features/FeatureImgFive";
import FeatureImgFour from "@components/features/FeatureImgFour";
import TestimonialTwo from "@components/testimonial/TestimonialTwo";
import HeroSectionFive from "@components/hero-section/HeroSectionFive";
import WorkProcessThree from "@components/workprocess/WorkProcessThree";

//this is for app landing demo

const AppLandingOne = () => {
  return (
    <Layout>
      <Navbar navDark />
      <HeroSectionFive />
      <FeatureFour />
      <FeatureImgFour />
      <FeatureImgFive />
      <WorkProcessThree />
      <PriceTwo />
      <FaqThree />
      <TestimonialTwo swiperBgClass="bg-white" />
      <QuickSupport />
      <Footer footerLight />
    </Layout>
  );
};

export default AppLandingOne;

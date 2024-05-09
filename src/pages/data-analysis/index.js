import React from "react";
import Layout from "@layout/Layout";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import FaqOne from "@components/faq/FaqOne";
import PricingOne from "@components/pricing/PricingOne";
import QuickSupport from "@components/support/QuickSupport";
import FeatureFour from "@components/features/FeatureFour";
import FeatureWithBg from "@components/features/FeatureWithBg";
import HeroSectionSeven from "@components/hero-section/HeroSectionSeven";
import FeatureImgContentFive from "@components/feature-img-content/FeatureImgContentFive";
import FeatureImgContentFour from "@components/feature-img-content/FeatureImgContentFour";

//this is for data analysis demo
const DataAnalysisHome = () => {
  return (
    <Layout>
      <Navbar navDark />
      <HeroSectionSeven />
      <FeatureFour />
      <FeatureImgContentFour />
      <FeatureImgContentFive />
      <FeatureWithBg />
      <PricingOne header ptClass="pt-120" />
      <FaqOne />
      <QuickSupport />
      <Footer footerLight />
    </Layout>
  );
};

export default DataAnalysisHome;

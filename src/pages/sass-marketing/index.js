import MarketingAbout from "@components/about/MarketingAbout";
import MarketingBusiness from "@components/business/MarketingBusiness";
import FaqFive from "@components/faq/FaqFive";
import FeatureNine from "@components/features/FeatureNine";
import HeroSeventeen from "@components/hero-section/HeroSeventeen";
import MarketingIntegration from "@components/integration/MarketingIntegration";
import MarketingPartner from "@components/partners/MarketingPartner";
import PriceFive from "@components/pricing/PriceFive";
import MarketingPlatform from "@components/sass-platform/MarketingPlatform";
import MarketingSubscription from "@components/subscription/MarketingSubscription";
import TestimonialTwo from "@components/testimonial/TestimonialTwo";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import Layout from "@layout/Layout";
import React from "react";

const SassMarketing = () => {
  return (
    <Layout classOpt="bg-soft-blue">
      <Navbar />
      <HeroSeventeen />
      <FeatureNine />
      <MarketingBusiness />
      <MarketingPlatform />
      <MarketingAbout />
      <PriceFive />
      <MarketingIntegration />
      <TestimonialTwo swiperBgClass="bg-white" />
      <MarketingSubscription />
      <FaqFive />
      <MarketingPartner />
      <Footer footerLight />
    </Layout>
  );
};

export default SassMarketing;

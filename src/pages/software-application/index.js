import React from "react";
import Layout from "@layout/Layout";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import TabOne from "@components/tabs/TabOne";
import CtaSubscribe from "@components/cta/CtaSubscribe";
import PromoTwo from "@components/promo/PromoTwo";
import LatestBlog from "@components/blogs/LatestBlog";
import SupportOne from "@components/support/SupportOne";
import FeatureImgSix from "@components/features/FeatureImgSix";
import FeatureImgSeven from "@components/features/FeatureImgSeven";
import IntegrationTwo from "@components/integration/IntegrationTwo";
import TestimonialTwo from "@components/testimonial/TestimonialTwo";
import WorkProcessFour from "@components/workprocess/WorkProcessFour";
import HeroSectionSix from "@components/hero-section/HeroSectionSix";

const SoftwareApplicationHome = () => {
  return (
    <Layout>
      <Navbar />
      <HeroSectionSix />
      <PromoTwo />
      <TabOne />
      <FeatureImgSix />
      <FeatureImgSeven />
      <CtaSubscribe />
      <WorkProcessFour />
      <TestimonialTwo swiperBgClass="bg-white" />
      <SupportOne className />
      <IntegrationTwo bgWhite />
      <LatestBlog />
      <Footer
        style={{
          background: "url('/page-header-bg.svg')no-repeat bottom right",
        }}
      />
    </Layout>
  );
};

export default SoftwareApplicationHome;

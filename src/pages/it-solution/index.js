import React from "react";
import Layout from "@layout/Layout";
import Navbar from "@layout/Header/Navbar";
import HeroSectionNine from "@components/hero-section/HeroSectionNine";
import WhyChoosUs from "@components/faq/WhyChoosUs";
import Footer from "@layout/Footer/Footer";
import LatestBlog from "@components/blogs/LatestBlog";
import SupportOne from "@components/support/SupportOne";
import CustomerTwo from "@components/customer/CustomerTwo";
import ServiceIt from "@components/services/ServiceIT";
import TestimonialFive from "@components/testimonial/TestimonialFive";
import PriceFour from "@components/pricing/PriceFour";
import TechTab from "@components/tabs/TechTab";
import PortfolioTab from "@components/tabs/PortfolioTab";

const ItSolution = () => {
  return (
    <Layout>
      <Navbar />
      <HeroSectionNine />
      <WhyChoosUs />
      <TechTab />
      <ServiceIt />
      <PortfolioTab />
      <CustomerTwo />
      <TestimonialFive />
      <PriceFour />
      <SupportOne className />
      <LatestBlog />
      <Footer footerGradient />
    </Layout>
  );
};

export default ItSolution;
